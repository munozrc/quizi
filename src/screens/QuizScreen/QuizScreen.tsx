import { PageLayout } from '../../components/Layout'

import { useQuiz } from './hooks/useQuiz'
import { Question, Card, QuizMenu, CardHeader } from './components'
import styles from './QuizScreen.module.css'

export const QuizScreen = () => {
  const { quiz, question, isStartedQuiz, nextQuestion } = useQuiz()

  if (typeof quiz === 'undefined') return <p>Cargando...</p>
  if (typeof question === 'undefined') return <p>Error al cargar la pregunta</p>
  if (quiz === null) return <p>Quiz no encontrado</p>

  const currentIndex = quiz.questions.indexOf(question) + 1
  const numberOfQuestions = quiz.questions.length

  return (
    <PageLayout>
      <main className={styles.container}>
        <Card isVisible={isStartedQuiz}>
          <CardHeader
            currentIndex={currentIndex}
            numberQuestions={numberOfQuestions}
          />
          <Question
            key={question.statement}
            goToNextQuestion={nextQuestion}
            {...question}
          />
        </Card>
        <Card isVisible={!isStartedQuiz}>
          <QuizMenu
            title={quiz.title}
            numberQuestions={numberOfQuestions}
          />
        </Card>
      </main>
    </PageLayout>
  )
}
