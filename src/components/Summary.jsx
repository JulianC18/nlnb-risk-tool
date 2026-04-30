// ============================================================
// SUMMARY / RESULTS PAGE
// ============================================================
// Tabbed results view:
//   - Overview: overall score, heat map, recommendations
//   - Risk Register: 1-5 ranking, distribution, per-question scores
//
// Auto-saves a record to localStorage on mount unless readOnly.
// ============================================================

import { useEffect, useState } from 'react'
import { categories } from '../data/questions'
import { recommendations } from '../data/recommendations'
import HeatMap from './HeatMap'
import RiskRegister from './RiskRegister'
import { saveAssessment, newId } from '../lib/storage'

export default function Summary({ answers, username, onRestart, onHistory, onSignIn, readOnly = false }) {
  const [tab, setTab] = useState('overview')
  const [saved, setSaved] = useState(false)

  // Average score per category
  const categoryScores = categories.map(cat => {
    const categoryAnswers = Object.values(answers).filter(a => a.category === cat.id)
    const total = categoryAnswers.reduce((sum, a) => sum + a.score, 0)
    const avg = categoryAnswers.length > 0 ? total / categoryAnswers.length : 0
    return {
      id: cat.id,
      name: cat.name,
      averageScore: avg,
      questionCount: categoryAnswers.length
    }
  })

  const allScores = Object.values(answers).map(a => a.score)
  const overallScore = allScores.length
    ? allScores.reduce((sum, s) => sum + s, 0) / allScores.length
    : 0

  const highRiskCategories = categoryScores.filter(cat => cat.averageScore >= 3.7)
  const mediumRiskCategories = categoryScores.filter(
    cat => cat.averageScore >= 2.4 && cat.averageScore < 3.7
  )

  // Auto-save every fresh assessment. Anonymous runs save as "guest".
  useEffect(() => {
    if (readOnly) return
    if (allScores.length === 0) return
    saveAssessment({
      id: newId(),
      username: username || 'guest',
      timestamp: Date.now(),
      answers,
      overallScore,
      categoryScores
    })
    setSaved(true)
    // run once on mount; deps intentionally empty
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="card">
      <h1>{readOnly ? 'Past Assessment' : 'Assessment Results'}</h1>

      {!readOnly && saved && (
        <div className="save-notice save-notice-ok">
          {username
            ? <>Saved to <strong>{username}</strong>'s history.</>
            : (
              <>
                Saved as <strong>guest</strong>.{' '}
                {onSignIn && (
                  <button className="link-btn" onClick={onSignIn}>Sign in</button>
                )}{' '}
                to track results under your own account.
              </>
            )
          }
        </div>
      )}

      {/* Tab nav */}
      <div className="tab-nav">
        <button
          className={`tab-btn ${tab === 'overview' ? 'active' : ''}`}
          onClick={() => setTab('overview')}
        >
          Overview
        </button>
        <button
          className={`tab-btn ${tab === 'register' ? 'active' : ''}`}
          onClick={() => setTab('register')}
        >
          Risk Register
        </button>
      </div>

      {tab === 'overview' && (
        <>
          <div className="overall-score">
            <div className="score-label">Overall Inherent Risk Score</div>
            <div className="score-value">{overallScore.toFixed(2)} / 5.00</div>
          </div>

          <HeatMap categoryScores={categoryScores} />

          <div className="recommendations">
            <h3>Recommended Risk Responses</h3>

            {highRiskCategories.length > 0 && (
              <div className="rec-section">
                <h4>High Priority</h4>
                {highRiskCategories.map(cat => (
                  <div key={cat.id} className="rec-card rec-high">
                    <h5>{cat.name}</h5>
                    <p><strong>Business:</strong> {recommendations[cat.id].business}</p>
                    <p><strong>Technical:</strong> {recommendations[cat.id].technical}</p>
                  </div>
                ))}
              </div>
            )}

            {mediumRiskCategories.length > 0 && (
              <div className="rec-section">
                <h4>Medium Priority</h4>
                {mediumRiskCategories.map(cat => (
                  <div key={cat.id} className="rec-card rec-medium">
                    <h5>{cat.name}</h5>
                    <p><strong>Business:</strong> {recommendations[cat.id].business}</p>
                    <p><strong>Technical:</strong> {recommendations[cat.id].technical}</p>
                  </div>
                ))}
              </div>
            )}

            {highRiskCategories.length === 0 && mediumRiskCategories.length === 0 && (
              <p>No high or medium risk areas identified. Continue current practices.</p>
            )}
          </div>
        </>
      )}

      {tab === 'register' && <RiskRegister answers={answers} />}

      <div className="summary-actions">
        <button className="btn-primary" onClick={onRestart}>
          {readOnly ? 'Back' : 'Start New Assessment'}
        </button>
        {!readOnly && onHistory && (
          <button className="btn-secondary" onClick={onHistory}>
            View History
          </button>
        )}
      </div>
    </div>
  )
}
