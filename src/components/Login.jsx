// ============================================================
// LOGIN MODAL
// ============================================================
// Optional sign-in. Username only for regular users.
// Admin accounts (e.g. "Admin") require a password.
// ============================================================

import { useState } from 'react'
import { setUser, isAdminName, checkAdminPassword } from '../lib/storage'

export default function Login({ onLogin, onClose }) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const trimmed = name.trim()
  const needsPassword = trimmed && isAdminName(trimmed)

  function submit(e) {
    e.preventDefault()
    setError('')
    if (!trimmed) return

    if (needsPassword) {
      if (!checkAdminPassword(trimmed, password)) {
        setError('Incorrect password.')
        return
      }
    }

    setUser(trimmed)
    onLogin(trimmed)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        <h2>Sign In</h2>
        <p className="subtitle">Optional. Sign in to save your assessment history.</p>

        <div className="login-notice">
          <strong>Demo:</strong> Class project. No real authentication —
          history is saved only in this browser. Admin account: <code>Admin</code> / <code>Admin</code>.
        </div>

        <form onSubmit={submit} className="login-form">
          <label className="login-label">
            Username
            <input
              type="text"
              className="login-input"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. analyst-1"
              autoFocus
              maxLength={40}
            />
          </label>

          {needsPassword && (
            <label className="login-label">
              Password
              <input
                type="password"
                className="login-input"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Required for admin accounts"
                autoFocus
              />
            </label>
          )}

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="btn-primary" disabled={!trimmed}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
