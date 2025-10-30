export async function getQuestions() {
  const res = await fetch('https://starrowvcfprod.blob.core.windows.net/questions/questions.it.json')
  return await res.json()
}

export async function sendAnswers(payload) {
  const res = await fetch('https://func-arrow-vcf.azurewebsites.net/api/report', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  return await res.json()
}
