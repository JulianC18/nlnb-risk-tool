// ============================================================
// RISK REGISTER
// ============================================================
// Tabular register of every answered question, ranked 1-5:
//   1 = Low, 2 = Low-Medium, 3 = Medium, 4 = High, 5 = Critical
// Includes:
//   - Distribution heatmap (count of answers at each level)
//   - Per-category average heatmap
//   - Full register table (question, category, response, score, level)
// ============================================================

import { categories } from '../data/questions'

const LEVELS = [
  { score: 1, label: 'Low',         band: 'low'      },
  { score: 2, label: 'Low-Medium',  band: 'low-med'  },
  { score: 3, label: 'Medium',      band: 'medium'   },
  { score: 4, label: 'High',        band: 'high'     },
  { score: 5, label: 'Critical',    band: 'critical' }
]

function levelFor(score) {
  return LEVELS.find(l => l.score === Math.round(score)) || LEVELS[0]
}

export default function RiskRegister({ answers }) {
  const entries = Object.entries(answers).map(([id, a]) => ({
    id,
    category: a.category,
    categoryName: categories.find(c => c.id === a.category)?.name || a.category,
    question: a.question,
    response: a.response,
    score: a.score,
    level: levelFor(a.score)
  }))

  // Distribution: count of questions at each level
  const distribution = LEVELS.map(l => ({
    ...l,
    count: entries.filter(e => e.score === l.score).length
  }))
  const maxCount = Math.max(1, ...distribution.map(d => d.count))

  // Sort register: highest risk first
  const sorted = [...entries].sort((a, b) => b.score - a.score)

  return (
    <div className="risk-register">
      {/* Distribution / scale */}
      <h3>Risk Level Distribution</h3>
      <p className="register-sub">Number of answered questions at each risk level (1 = least likely / lowest impact, 5 = most likely / critical).</p>
      <div className="distribution-grid">
        {distribution.map(d => (
          <div key={d.score} className={`dist-cell band-${d.band}`}>
            <div className="dist-score">{d.score}</div>
            <div className="dist-label">{d.label}</div>
            <div className="dist-count">{d.count}</div>
            <div className="dist-bar-track">
              <div
                className="dist-bar-fill"
                style={{ width: `${(d.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Register table */}
      <h3>Risk Register</h3>
      <p className="register-sub">Every answered question, sorted by risk score (highest first).</p>
      <div className="register-table-wrap">
        <table className="register-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Question</th>
              <th>Response</th>
              <th>Score</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.categoryName}</td>
                <td className="reg-q">{e.question}</td>
                <td className="reg-r">{e.response}</td>
                <td className="reg-score">{e.score}</td>
                <td>
                  <span className={`level-badge band-${e.level.band}`}>
                    {e.level.label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
