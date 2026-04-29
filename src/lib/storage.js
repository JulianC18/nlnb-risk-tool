// ============================================================
// LOCAL STORAGE WRAPPER
// ============================================================
// Single source of truth for keys + JSON encode/decode.
// Keys:
//   nlnb.currentUser  -> active username (string)
//   nlnb.history      -> array of assessment records
// ============================================================

const USER_KEY = 'nlnb.currentUser'
const HISTORY_KEY = 'nlnb.history'

// Hardcoded admin credentials (class demo only — not real auth).
const ADMINS = {
  Admin: 'Admin'
}

export function isAdminName(username) {
  return Object.prototype.hasOwnProperty.call(ADMINS, username)
}

export function checkAdminPassword(username, password) {
  return ADMINS[username] === password
}

export function isAdmin(username) {
  return !!username && isAdminName(username)
}

export function getUser() {
  try {
    return localStorage.getItem(USER_KEY) || null
  } catch {
    return null
  }
}

export function setUser(username) {
  localStorage.setItem(USER_KEY, username)
}

export function clearUser() {
  localStorage.removeItem(USER_KEY)
}

export function getHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function getHistoryFor(username) {
  return getHistory()
    .filter(r => r.username === username)
    .sort((a, b) => b.timestamp - a.timestamp)
}

export function getAllHistory() {
  return getHistory().sort((a, b) => b.timestamp - a.timestamp)
}

export function saveAssessment(record) {
  const all = getHistory()
  all.push(record)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(all))
}

export function deleteAssessment(id) {
  const all = getHistory().filter(r => r.id !== id)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(all))
}

export function newId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}
