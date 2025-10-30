import React, { useEffect, useState } from 'react'
import QuestionCard from './components/QuestionCard.jsx'
import ResultCard from './components/ResultCard.jsx'
import { getQuestions, sendAnswers } from './services/api.js'
import './index.css'

export default function App() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState(null)
  const [userData, setUserData] = useState({ project: '', client: '', email: '' })

  useEffect(() => {
    getQuestions().then(data => {
      setQuestions(data.sections || [])
      setLoading(false)
    })
  }, [])

  const handleAnswer = (id, value) => setAnswers({ ...answers, [id]: value })

  const handleSubmit = async () => {
    if (!userData.email) {
      alert('Inserisci un indirizzo email valido.')
      return
    }
    const response = await sendAnswers({ ...userData, answers })
    setResult(response)
  }

  if (loading) return <div className="text-center mt-20 text-lg">Caricamento questionario...</div>

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex items-center justify-between border-b pb-4 mb-6">
        <img src="/arrow-logo.svg" alt="Arrow" className="h-10" />
        <h1 className="text-2xl font-semibold text-sky-800">VMware Assessment Tool</h1>
        <img src="/vmware-logo.svg" alt="VMware" className="h-10" />
      </header>

      {!result ? (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Questionario</h2>
          {questions.map(section => (
            <div key={section.id}>
              <h3 className="text-lg font-medium mt-4 mb-2 text-sky-700">{section.title}</h3>
              {section.questions.map(q => (
                <QuestionCard key={q.id} question={q} onAnswer={handleAnswer} />
              ))}
            </div>
          ))}

          <div className="mt-6 space-y-3">
            <input className="w-full border p-2 rounded" placeholder="Nome progetto" value={userData.project} onChange={e => setUserData({ ...userData, project: e.target.value })} />
            <input className="w-full border p-2 rounded" placeholder="Cliente" value={userData.client} onChange={e => setUserData({ ...userData, client: e.target.value })} />
            <input className="w-full border p-2 rounded" placeholder="Email" type="email" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} />
          </div>

          <button onClick={handleSubmit} className="mt-6 w-full bg-sky-700 text-white py-3 rounded-lg hover:bg-sky-800">Invia e ricevi il report</button>
        </div>
      ) : (
        <ResultCard result={result} />
      )}
    </div>
  )
}
