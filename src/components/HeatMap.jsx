// ============================================================
// HEAT MAP
// ============================================================
// Displays a color-coded grid showing risk level per category.
// Green = low risk, Yellow = medium, Red = high.
//
// Score ranges (out of 5):
//   1.0 - 2.3 = Low (green)
//   2.4 - 3.6 = Medium (yellow)
//   3.7 - 5.0 = High (red)
// ============================================================

export default function HeatMap({ categoryScores }) {
  function getRiskLevel(score) {
    if (score < 2.4) return 'low'
    if (score < 3.7) return 'medium'
    return 'high'
  }

  function getRiskLabel(score) {
    if (score < 2.4) return 'LOW'
    if (score < 3.7) return 'MEDIUM'
    return 'HIGH'
  }

  return (
    <div className="heat-map">
      <h3>Risk Heat Map</h3>
      <div className="heat-grid">
        {categoryScores.map(cat => (
          <div
            key={cat.id}
            className={`heat-cell risk-${getRiskLevel(cat.averageScore)}`}
          >
            <div className="heat-cell-name">{cat.name}</div>
            <div className="heat-cell-score">{cat.averageScore.toFixed(1)}</div>
            <div className="heat-cell-label">{getRiskLabel(cat.averageScore)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
