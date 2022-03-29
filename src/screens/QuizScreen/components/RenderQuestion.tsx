import useQuestion from '../hooks/useQuestion'
import { Button } from '../../../components/Button'
import { Question as QuestionType } from '../../../typings'
import { ArrowIcon } from '../../../components/icons'

import styles from './RenderQuestion.module.css'
import { CardHeader } from './CardHeader'
import { Card } from './Card'

interface RenderQuestionProps extends QuestionType {
  isVisible: boolean
  questions: QuestionType[]
  goToNextQuestion: () => void
}

export const RenderQuestion = ({ isVisible, questions, goToNextQuestion, ...question } : RenderQuestionProps) => {
  const { ref, isQuestionAnswered, checkAnswer } = useQuestion(question.answer, styles)
  const currentIndex = questions.findIndex(q => q.statement === question.statement) + 1
  const numberOfQuestions = questions.length
  return (
    <Card isVisible={isVisible}>
      <CardHeader
        currentIndex={currentIndex}
        numberQuestions={numberOfQuestions}
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.statement}>{question.statement}</p>
        </header>
        <footer className={styles.footer}>
          <div className={styles.question}>
            {question.options.map(({ key, value }) => (
              <button
                key={key}
                name={key.toString()}
                ref={key === question.answer ? ref : undefined}
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
