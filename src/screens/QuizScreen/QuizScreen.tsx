import { PageLayout } from '../../components/Layout'
import { Spinner } from '../../components/Spiner'

import { useQuiz } from './hooks/useQuiz'
import { Results } from './components/Results'
import { Setup } from './components/Setup'
import { RenderQuestion } from './components/RenderQuestion'
import styles from './QuizScreen.module.css'

export const QuizScreen = () => {
  const { quiz, question, quizStatus, nextQuestion, startQuiz, finishQuiz } = useQuiz()

  if (typeof quiz === 'undefined') return <Spinner />
  if (quiz === null) return <p>Quiz no encontrado</p>
  if (typeof question === 'undefined') return <p>Error al cargar la pregunta</p>

  return (
    <PageLayout>
      <main className={styles.container}>
        <RenderQuestion
          key={question.statement}
          isVisible={quizStatus === 'started'}
          questions={quiz.questions}
          goToNextQuestion={nextQuestion}
          {...question}
        />
        <Setup
          isVisible={quizStatus === 'making'}
          numberQuestions={quiz.questions.length}
          title={quiz.title}
          startQuiz={startQuiz}
        />
        <Results
          isVisible={quizStatus === 'finished'}
          handleFinishedQuiz={finishQuiz}
        />
      </main>
    </PageLayout>
  )
}
