import { PageLayout } from '../../components/Layout'
import { Spinner } from '../../components/Spiner'

import { useQuiz } from './hooks/useQuiz'
import { Question, Card, QuizMenu, CardHeader } from './components'
import styles from './QuizScreen.module.css'
import { Results } from './components/Results'

export const QuizScreen = () => {
  const { quiz, question, quizStatus, nextQuestion, startQuiz, finishQuiz } = useQuiz()

  if (typeof quiz === 'undefined') return <Spinner />
  if (quiz === null) return <p>Quiz no encontrado</p>
  if (typeof question === 'undefined') return <p>Error al cargar la pregunta</p>

  const currentIndex = quiz.questions.indexOf(question) + 1
  const numberOfQuestions = quiz.questions.length

  return (
    <PageLayout>
      <main className={styles.container}>
        <Card isVisible={quizStatus === 'started'}>
          <CardHeader
            currentIndex={currentIndex}
            numberQuestions={numberOfQuestions}
          />
          <Question
            key={question.statement}
            goToNextQuestion={nextQuestion}
            isLastQuestion={currentIndex === numberOfQuestions}
            {...question}
          />
        </Card>
        <Card isVisible={quizStatus === 'making'}>
          <QuizMenu
            title={quiz.title}
            numberQuestions={numberOfQuestions}
            startQuiz={startQuiz}
          />
        </Card>
        <Results
          isVisible={quizStatus === 'finished'}
          handleFinishedQuiz={finishQuiz}
        />
      </main>
    </PageLayout>
  )
}
