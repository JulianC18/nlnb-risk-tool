// ============================================================
// INTRO SCREEN
// ============================================================
// Default landing. Sign-in is optional — anyone can start.
// ============================================================

export default function Intro({ username, onStart, onHistory, onSignIn }) {
  // When logged in we always show View History (page handles empty state
  // and demo examples are always visible there).
  const hasHistory = !!username

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
    </div>
  )
}
