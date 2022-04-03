import useQuestion from '../hooks/useQuestion'
import { Button } from '../../../components/Button'
import { Question as QuestionType } from '../../../typings'
import { ArrowIcon } from '../../../components/icons'
import { Card, CardHeader } from '../../../components/Card'

import styles from './RenderQuestion.module.css'

interface RenderQuestionProps {
  isVisible: boolean
  question: QuestionType
  numberOfQuestions: number
  currentIndex: number
  goToNextQuestion: () => void
}

const defaultValues: QuestionType = {
  answer: 0,
  options: [],
  statement: '',
  type: ''
}

export const RenderQuestion = (props : RenderQuestionProps) => {
  const { isVisible, question, currentIndex, numberOfQuestions, goToNextQuestion } = props
  const { answer, statement, options } = question ?? defaultValues
  const { ref, isQuestionAnswered, randomOptions, checkAnswer } = useQuestion(answer, styles, options)

  if (!question || typeof question === 'undefined') return null

  return (
    <Card isVisible={isVisible}>
      <CardHeader
        currentIndex={currentIndex}
        numberQuestions={numberOfQuestions}
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.statement}>{statement}</p>
        </header>
        <footer className={styles.footer}>
          <div className={styles.question}>
            {randomOptions.map(({ key, value }) => (
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
            {currentIndex === numberOfQuestions ? 'Terminar' : 'Siguiente'}
            <ArrowIcon />
          </Button>
        </footer>
      </div>
    </Card>
  )
}
