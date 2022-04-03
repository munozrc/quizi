import { PageLayout } from '../../components/Layout'
import { Spinner } from '../../components/Spiner'

import { useQuiz } from './hooks/useQuiz'
import { RenderQuestion, Results, Setup } from './components'
import styles from './QuizScreen.module.css'

export const QuizScreen = () => {
  const { quiz, question, questions, quizStatus, nextQuestion, startQuiz, finishQuiz } = useQuiz()

  if (typeof quiz === 'undefined') return <Spinner />
  if (quiz === null) return <p>Quiz no encontrado</p>

  return (
    <PageLayout>
      <main className={styles.container}>
        <Setup
          isVisible={quizStatus === 'setup'}
          numberQuestions={quiz.questions.length}
          title={quiz.title}
          startQuiz={startQuiz}
        />
        <RenderQuestion
          key={question?.statement}
          isVisible={quizStatus === 'started'}
          goToNextQuestion={nextQuestion}
          question={question}
          numberOfQuestions={questions.length}
          currentIndex={questions.indexOf(question) + 1}
        />
        <Results
          isVisible={quizStatus === 'finished'}
          handleFinishedQuiz={finishQuiz}
        />
      </main>
    </PageLayout>
  )
}
