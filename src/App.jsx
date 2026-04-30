// ============================================================
// MAIN APP
// ============================================================
// Login is optional and lives in the header.
// Stages:
//   - 'intro'   : welcome screen (default landing)
//   - 'quiz'    : questionnaire
//   - 'summary' : fresh results (auto-saves only when logged in)
//   - 'history' : list of past assessments (login required)
//   - 'view'    : read-only summary of a past assessment
// ============================================================

import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Login from './components/Login'
import Questionnaire from './components/Questionnaire'
import Summary from './components/Summary'
import History from './components/History'
import { getUser, clearUser, isAdmin, saveAssessment } from './lib/storage'
import { getDemoRecords, hasSeededDemo, markDemoSeeded } from './data/demoSeed'

export default function App() {
  const [user, setUserState] = useState(null)
  const [stage, setStage] = useState('intro')
  const [answers, setAnswers] = useState({})
  const [viewing, setViewing] = useState(null)
  const [loginOpen, setLoginOpen] = useState(false)

  // Restore user + seed demo records on first load (one-time per browser)
  useEffect(() => {
    const u = getUser()
    if (u) setUserState(u)
    if (!hasSeededDemo()) {
      for (const rec of getDemoRecords()) saveAssessment(rec)
      markDemoSeeded()
    }
  }, [])

  function handleLogin(name) {
    setUserState(name)
    setLoginOpen(false)
  }

  function handleLogout() {
    clearUser()
    setUserState(null)
    if (stage === 'history' || stage === 'view') {
      setStage('intro')
      setViewing(null)
    }
  }

  function startQuiz() {
    setAnswers({})
    setStage('quiz')
  }

  function finishQuiz(finalAnswers) {
    setAnswers(finalAnswers)
    setStage('summary')
  }

  function goHistory() {
    if (!user) {
      setLoginOpen(true)
      return
    }
    setStage('history')
  }

  function viewRecord(record) {
    setViewing(record)
    setStage('view')
  }

  function backFromView() {
    setViewing(null)
    // If viewer is logged in, go back to history list; otherwise to intro.
    setStage(user ? 'history' : 'intro')
  }

  function backToIntro() {
    setAnswers({})
    setViewing(null)
    setStage('intro')
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">NLNB</div>
        <div className="header-text">Risk Assessment Tool</div>

        <div className="header-user">
          {user ? (
            <>
              <span className="header-username">
                {user}{isAdmin(user) && <span className="admin-tag">ADMIN</span>}
              </span>
              <button className="header-logout" onClick={handleLogout}>Log out</button>
            </>
          ) : (
            <button className="header-signin" onClick={() => setLoginOpen(true)}>
              Sign in
            </button>
          )}
        </div>
      </header>

      <main className="app-main">
        {stage === 'intro' && (
          <Intro
            username={user}
            onStart={startQuiz}
            onHistory={goHistory}
            onSignIn={() => setLoginOpen(true)}
          />
        )}
        {stage === 'quiz' && <Questionnaire onComplete={finishQuiz} />}
        {stage === 'summary' && (
          <Summary
            answers={answers}
            username={user}
            onRestart={backToIntro}
            onHistory={goHistory}
            onSignIn={() => setLoginOpen(true)}
          />
        )}
        {stage === 'history' && user && (
          <History
            username={user}
            onView={viewRecord}
            onNew={startQuiz}
            onBack={backToIntro}
          />
        )}
        {stage === 'view' && viewing && (
          <Summary
            answers={viewing.answers}
            username={user}
            readOnly
            onRestart={backFromView}
          />
        )}
      </main>

      {loginOpen && (
        <Login
          onLogin={handleLogin}
          onClose={() => setLoginOpen(false)}
        />
      )}

      <footer className="app-footer">
        <p>ETI 302 — ETICorp Team 11 — Spring 2026</p>
      </footer>
    </div>
  )
}
