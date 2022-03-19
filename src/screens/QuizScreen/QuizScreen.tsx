import { useQuiz } from './hooks/useQuiz'
import { Question } from './components'
import styles from './QuizScreen.module.css'

export const QuizScreen = () => {
  const { quiz, question } = useQuiz()

  if (typeof quiz === 'undefined') return <p>Cargando...</p>
  if (typeof question === 'undefined') return <p>Error al cargar la pregunta</p>
  if (quiz === null) return <p>Quiz no encontrado</p>

  return (
    <main className={styles.container}>
      <Question {...question}/>
    </main>
  )
}
