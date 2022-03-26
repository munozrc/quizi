import { useState } from 'react'

import { Button } from '../../../components/Button'

import styles from './QuizMenu.module.css'

interface QuizMenuProps {
  title: string
  numberQuestions: number
  startQuiz: (range: number) => void
}

const RANGE_QUESTIONS = [0, 5, 10, 15, 20]

export const QuizMenu = ({ title, numberQuestions, startQuiz }: QuizMenuProps) => {
  const [activeRange, setActiveRange] = useState<number>(0)
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.subtitle}>Tema <span className={styles.separator}/> preguntas {numberQuestions}</span>
        <h2 className={styles.title}>{title}</h2>
      </header>
      <section className={styles.content}>
        <p className={styles.description}>Porfavor seleccione el número maximo de preguntas</p>
        <div className={styles.wrapperButtons}>
          {RANGE_QUESTIONS.map(range => (
            <button
              key={range}
              className={`${styles.btnQuestions} ${range === activeRange ? styles.active : ''}`}
              disabled={range > numberQuestions}
              onClick={() => setActiveRange(range)}
            >
              {range !== 0 ? range : 'Todas'}
            </button>
          ))}
        </div>
      </section>
      <Button onClick={() => startQuiz(activeRange)}>Comenzar</Button>
    </div>
  )
}
