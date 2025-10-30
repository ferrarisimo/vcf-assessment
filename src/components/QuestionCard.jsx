import React from 'react'

export default function QuestionCard({ question, onAnswer }) {
  if (question.type === 'boolean') {
    return (
      <div className="flex items-center justify-between border p-2 rounded mb-2">
        <span>{question.text || question.id}</span>
        <select onChange={e => onAnswer(question.id, e.target.value === 'true')} className="border p-1 rounded">
          <option value="">Seleziona</option>
          <option value="true">Sì</option>
          <option value="false">No</option>
        </select>
      </div>
    )
  }

  if (question.type === 'single') {
    return (
      <div className="mb-2">
        <label className="block mb-1 font-medium">{question.text || question.id}</label>
        <select onChange={e => onAnswer(question.id, e.target.value)} className="border p-2 rounded w-full">
          <option value="">Seleziona</option>
          {question.options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    )
  }

  return null
}
