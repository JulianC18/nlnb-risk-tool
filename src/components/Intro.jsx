// ============================================================
// INTRO SCREEN
// ============================================================
// Default landing. Sign-in is optional — anyone can start.
// ============================================================

import { getHistoryFor, isAdmin, getAllHistory, getHistory } from '../lib/storage'

export default function Intro({ username, onStart, onHistory, onSignIn, onViewDemo }) {
  const demos = getHistory().filter(r => r.isDemo)
  const goodDemo = demos.find(r => r.username === 'demo-good')
  const badDemo = demos.find(r => r.username === 'demo-bad')
  let hasHistory = false
  if (username) {
    hasHistory = isAdmin(username)
      ? getAllHistory().length > 0
      : getHistoryFor(username).length > 0
  }

  return (
    <div className="card">
      <h1>NLNB Risk Assessment Tool</h1>
      <p className="subtitle">Nittany Lion National Bank — IT Risk Evaluation</p>

      <div className="info-section">
        <h2>About This Tool</h2>
        <p>
          This assessment evaluates risks across six key categories of NLNB's IT
          environment. Answer each question honestly based on your current operations.
        </p>

        <h2>What You'll Get</h2>
        <ul>
          <li>A color-coded heat map showing risk levels by category</li>
          <li>Overall inherent risk rating</li>
          <li>Prioritized recommendations for risk response</li>
          <li>A risk register with every question scored 1–5 (Low → Critical)</li>
        </ul>

        <h2>Estimated Time</h2>
        <p>10–15 minutes</p>

        {!username && (
          <p className="info-hint">
            <strong>Tip:</strong> <button className="link-btn" onClick={onSignIn}>Sign in</button> to
            save your assessments and view them later. Optional — you can start without an account.
          </p>
        )}
      </div>

      <div className="intro-actions">
        <button className="btn-primary" onClick={onStart}>
          Start Assessment
        </button>
        {hasHistory && (
          <button className="btn-secondary" onClick={onHistory}>
            View History
          </button>
        )}
      </div>

      {(goodDemo || badDemo) && (
        <div className="demo-section">
          <h3>See Example Reports</h3>
          <p className="demo-sub">Don't want to take the quiz first? View pre-built sample assessments:</p>
          <div className="demo-buttons">
            {goodDemo && (
              <button
                className="demo-btn demo-good"
                onClick={() => onViewDemo(goodDemo)}
              >
                <span className="demo-btn-tag">LOW RISK</span>
                <span className="demo-btn-title">Strong Security Posture</span>
                <span className="demo-btn-meta">Score {goodDemo.overallScore.toFixed(2)} / 5.00</span>
              </button>
            )}
            {badDemo && (
              <button
                className="demo-btn demo-bad"
                onClick={() => onViewDemo(badDemo)}
              >
                <span className="demo-btn-tag">CRITICAL RISK</span>
                <span className="demo-btn-title">Weak Security Posture</span>
                <span className="demo-btn-meta">Score {badDemo.overallScore.toFixed(2)} / 5.00</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
