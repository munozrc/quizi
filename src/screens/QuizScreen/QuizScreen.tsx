import { useQuiz } from './hooks/useQuiz'
import { Question } from './components'
import { Card } from './components/Card'
import styles from './QuizScreen.module.css'

export const QuizScreen = () => {
  const { quiz, question, nextQuestion } = useQuiz()

  if (typeof quiz === 'undefined') return <p>Cargando...</p>
  if (typeof question === 'undefined') return <p>Error al cargar la pregunta</p>
  if (quiz === null) return <p>Quiz no encontrado</p>

  return (
    <main className={styles.container}>
      <Card
        current={quiz.questions.indexOf(question) + 1}
        length={quiz.questions.length}
      >
        <Question
          key={question.statement}
          goToNextQuestion={nextQuestion}
          {...question}
        />
      </Card>
    </main>
  )
}
