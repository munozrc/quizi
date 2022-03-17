import { useParams } from 'react-router-dom'

import { useQuiz } from '../hooks/useQuiz'

import styles from './QuizScreen.module.css'

export const QuizScreen = () => {
  const { id } = useParams()
  const { quiz, question, checkAnswer } = useQuiz(id)

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
        </footer>
      </section>
    </main>
  )
}
