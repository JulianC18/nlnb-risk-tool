// ============================================================
// QUESTIONNAIRE
// ============================================================
// Shows one question at a time with a progress bar.
// When the user selects an answer, advances to the next question.
// When all questions are done, calls onComplete with the answers.
// ============================================================

import { useState } from 'react'
import { questions, categories } from '../data/questions'

export default function Questionnaire({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const currentQuestion = questions[currentIndex]
  const currentCategory = categories.find(c => c.id === currentQuestion.category)
  const progress = ((currentIndex + 1) / questions.length) * 100

  function handleAnswer(score, label) {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: {
        score: score,
        category: currentQuestion.category,
        question: currentQuestion.text,
        response: label
      }
    }
    setAnswers(newAnswers)

    // Move to next question, or finish if we're on the last one
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      onComplete(newAnswers)
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="card">
      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="progress-text">
        Question {currentIndex + 1} of {questions.length}
      </p>

      {/* Category label */}
      <div className="category-tag">{currentCategory.name}</div>

      {/* Question */}
      <h2 className="question-text">{currentQuestion.text}</h2>

      {/* Answer options */}
      <div className="options-list">
        {currentQuestion.options.map((option, i) => (
          <button
            key={i}
            className="option-btn"
            onClick={() => handleAnswer(option.score, option.label)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Back button */}
      {currentIndex > 0 && (
        <button className="btn-secondary" onClick={handleBack}>
          ← Back
        </button>
      )}
    </div>
  )
}
