import { useParams } from 'react-router-dom'

import { useQuiz } from './hooks/useQuiz'
import { Question } from './components'
import styles from './QuizScreen.module.css'

export const QuizScreen = () => {
  const { id } = useParams()
  const { quiz, question } = useQuiz(id)

  if (typeof quiz === 'undefined') return <p>Cargando...</p>
  if (quiz === null) return <p>Quiz no encontrado</p>

  if (question === null || typeof question === 'undefined') return null

  return (
    <main className={styles.container}>
      <Question {...question}/>
    </main>
  )
}
