import React from 'react'

export default function ResultCard({ result }) {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow text-center">
      <h2 className="text-xl font-semibold text-sky-700 mb-4">Grazie!</h2>
      <p className="mb-2">Il tuo report personalizzato è stato inviato a:</p>
      <p className="font-medium text-gray-700">{result.email}</p>
      <p className="text-sm text-gray-500 mt-4">Controlla la tua casella di posta (anche la cartella spam).</p>
    </div>
  )
}
