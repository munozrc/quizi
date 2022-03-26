import useQuestion from '../hooks/useQuestion'
import { Button } from '../../../components/Button'
import { Question as QuestionType } from '../../../typings'
import { ArrowIcon } from '../../../components/icons'

import styles from './Question.module.css'

interface QuestionProps extends QuestionType {
  goToNextQuestion: () => void
  isLastQuestion: boolean
}

export const Question = ({ statement, options, answer, isLastQuestion, goToNextQuestion } : QuestionProps) => {
  const { ref, isQuestionAnswered, checkAnswer } = useQuestion(answer, styles)
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
              name={key.toString()}
              ref={key === answer ? ref : undefined}
              className={`${styles.option}`}
              onClick={checkAnswer}
            >
              {value}
            </button>
          ))}
        </div>
        <Button
          onClick={goToNextQuestion}
          disabled={!isQuestionAnswered}
          variant={'flat'}
        >
          {isLastQuestion ? 'Terminar' : 'Siguiente'}
          <ArrowIcon />
        </Button>
      </footer>
    </div>
  )
}
