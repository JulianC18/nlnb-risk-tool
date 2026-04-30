// ============================================================
// DEMO SEED DATA
// ============================================================
// Two example assessments shown by default so reviewers can see
// what a finished report looks like without taking the quiz.
//   - demo-good : answers picked at the lowest-risk option per Q
//   - demo-bad  : answers picked at the highest-risk option per Q
// ============================================================

import { questions, categories } from './questions'

const SEED_FLAG = 'nlnb.seededDemo'

// Build an answers object by passing each question's options through
// a picker function (returns the option to use).
function buildAnswers(pick) {
  const out = {}
  for (const q of questions) {
    const opt = pick(q.options)
    out[q.id] = {
      score: opt.score,
      category: q.category,
      question: q.text,
      response: opt.label
    }
  }
  return out
}

function computeCategoryScores(answers) {
  return categories.map(cat => {
    const a = Object.values(answers).filter(x => x.category === cat.id)
    const total = a.reduce((s, x) => s + x.score, 0)
    return {
      id: cat.id,
      name: cat.name,
      averageScore: a.length ? total / a.length : 0,
      questionCount: a.length
    }
  })
}

function computeOverall(answers) {
  const scores = Object.values(answers).map(a => a.score)
  return scores.length ? scores.reduce((s, x) => s + x, 0) / scores.length : 0
}

function makeRecord(username, answers, daysAgo) {
  return {
    id: `seed-${username}`,
    username,
    timestamp: Date.now() - daysAgo * 24 * 60 * 60 * 1000,
    answers,
    overallScore: computeOverall(answers),
    categoryScores: computeCategoryScores(answers),
    isDemo: true
  }
}

export function getDemoRecords() {
  const goodAnswers = buildAnswers(opts => opts[0])
  const badAnswers = buildAnswers(opts => opts[opts.length - 1])
  return [
    makeRecord('demo-good', goodAnswers, 3),
    makeRecord('demo-bad', badAnswers, 1)
  ]
}

export function hasSeededDemo() {
  try {
    return localStorage.getItem(SEED_FLAG) === '1'
  } catch {
    return false
  }
}

export function markDemoSeeded() {
  localStorage.setItem(SEED_FLAG, '1')
}
