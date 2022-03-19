import { MouseEvent, useRef, useState } from 'react'

import { Button } from '../../../components/Button'
import { Question as QuestionType } from '../../../typings'

import styles from './Question.module.css'

interface QuestionProps extends QuestionType {}

export const Question = ({ statement, options, answer } : QuestionProps) => {
  const correctAnswerRef = useRef<HTMLButtonElement>(null)
  const [isQuestionAnswered, setIsQuestionAnswered] = useState<boolean>(false)

  const checkAnswer = ({ target }: MouseEvent<HTMLElement>) => {
    const { classList, name } = target as HTMLButtonElement
    const keyValue = +name

    if (isQuestionAnswered) return
    else setIsQuestionAnswered(prev => !prev)

    if (keyValue !== answer) {
      correctAnswerRef.current?.classList.add(styles.correct__notselected)
      classList.add(styles.wrong)
      return
    }

    classList.add(styles.correct)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.statement}>{statement}</p>
      </header>
      <footer className={styles.footer}>
        <div className={styles.question}>
          {options.map(({ key, value }) => (
            <button
              key={key}
              name={key + ''}
              ref={key === answer ? correctAnswerRef : undefined}
              className={`${styles.option}`}
              onClick={checkAnswer}
            >
              {value}
            </button>
          ))}
        </div>
        <Button disabled={!isQuestionAnswered}>Siguiente</Button>
      </footer>
    </div>
  )
}
