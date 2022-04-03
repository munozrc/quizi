const GOOGLE_API_KEY = import.meta.env.VITE_APP_GOOGLE_API_KEY

export async function getQuizFromGoogleDrive (id: string) {
  const api = `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${GOOGLE_API_KEY}`
  return await window.fetch(api)
    .then(response => {
      if (response.ok) return response.json()
      return null
    })
    .catch(error => {
      console.error({ error })
      return null
    })
}
