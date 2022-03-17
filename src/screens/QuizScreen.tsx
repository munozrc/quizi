import { useParams } from 'react-router-dom'

import { Button } from '../components/Button'
import { useQuiz } from '../hooks/useQuiz'

import styles from './QuizScreen.module.css'

export const QuizScreen = () => {
  const { id } = useParams()
  const { quiz, question, isQuestionAnswered, checkAnswer, nextQuestion } = useQuiz(id)

  if (typeof quiz === 'undefined') return <p>Cargando...</p>
  if (quiz === null) return <p>Quiz no encontrado</p>

  return (
    <main className={styles.container}>
      <section className={styles.quiz}>
        <header className={styles.quiz__hero}>
          <p className={styles.quiz__question}>{question?.statement}</p>
        </header>
        <footer className={styles.quiz__answers}>
          {
            question?.options.map((option) => (
              <button
                key={option.key}
                className={`${styles.quiz__answer}`}
                onClick={(e) => checkAnswer(e, option.key)}
              >
                {option.value}
              </button>
            ))
          }
          {isQuestionAnswered && <Button onClick={nextQuestion}>Siguiente</Button>}
        </footer>
      </section>
    </main>
  )
}
