import { useState } from 'react'

import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'

import styles from './Setup.module.css'

interface SetupProps {
  isVisible: boolean
  numberQuestions: number
  title: string
  startQuiz: (range: number) => void
}

const RANGE_QUESTIONS = [0, 5, 10, 15, 20]

export const Setup = ({ isVisible, numberQuestions, title, startQuiz }: SetupProps) => {
  const [activeRange, setActiveRange] = useState<number>(0)
  return (
    <Card isVisible={isVisible}>
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
    </Card>
  )
}
