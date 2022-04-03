export const getQuizSettingsFromLocalStorage = () => {
  try {
    const data = window.localStorage.getItem('QUIZI_DATA_QUIZ')
    return data !== null ? JSON.parse(data) : null
  } catch (error) {
    return null
  }
}

export const randomize = (array: any[]) => array.sort(() => Math.random() - 0.5)
