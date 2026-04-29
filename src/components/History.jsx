// ============================================================
// HISTORY LIST
// ============================================================
// Past assessments. Admin sees all users' records;
// regular users see only their own.
// ============================================================

import { useState } from 'react'
import { getHistoryFor, getAllHistory, deleteAssessment, isAdmin } from '../lib/storage'

function bandFor(score) {
  const s = Math.round(score)
  if (s <= 1) return { band: 'low',      label: 'Low' }
  if (s === 2) return { band: 'low-med',  label: 'Low-Medium' }
  if (s === 3) return { band: 'medium',   label: 'Medium' }
  if (s === 4) return { band: 'high',     label: 'High' }
  return { band: 'critical', label: 'Critical' }
}

function formatDate(ts) {
  return new Date(ts).toLocaleString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: 'numeric', minute: '2-digit'
  })
}

export default function History({ username, onView, onNew, onBack }) {
  const admin = isAdmin(username)
  const load = () => admin ? getAllHistory() : getHistoryFor(username)
  const [records, setRecords] = useState(load)

  function handleDelete(id, e) {
    e.stopPropagation()
    if (!confirm('Delete this assessment?')) return
    deleteAssessment(id)
    setRecords(load())
  }

  return (
    <div className="card">
      <h1>Assessment History</h1>
      <p className="subtitle">
        {admin
          ? <>All assessments (admin view: <strong>{username}</strong>)</>
          : <>Past assessments for <strong>{username}</strong></>
        }
      </p>

      {records.length === 0 && (
        <div className="empty-state">
          <p>No assessments yet.</p>
          <button className="btn-primary" onClick={onNew}>Start First Assessment</button>
        </div>
      )}

      {records.length > 0 && (
        <>
          <div className="history-list">
            {records.map((r, i) => {
              const b = bandFor(r.overallScore)
              return (
                <div key={r.id} className="history-row" onClick={() => onView(r)}>
                  <div className="history-row-main">
                    <div className="history-row-num">#{records.length - i}</div>
                    <div>
                      <div className="history-row-date">
                        {formatDate(r.timestamp)}
                        {admin && (
                          <span className="history-row-user">{r.username}</span>
                        )}
                      </div>
                      <div className="history-row-meta">
                        {Object.keys(r.answers).length} questions · overall {r.overallScore.toFixed(2)} / 5.00
                      </div>
                    </div>
                  </div>
                  <div className="history-row-right">
                    <span className={`level-badge band-${b.band}`}>{b.label}</span>
                    <button
                      className="history-delete"
                      onClick={(e) => handleDelete(r.id, e)}
                      aria-label="Delete assessment"
                      title="Delete"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="summary-actions">
            <button className="btn-primary" onClick={onNew}>New Assessment</button>
            {onBack && (
              <button className="btn-secondary" onClick={onBack}>Back to Home</button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
