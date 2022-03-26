import styles from './QuizMenu.module.css'

interface QuizMenuProps {
  title: string
  numberQuestions: number
}

export const QuizMenu = ({ title, numberQuestions }: QuizMenuProps) => {
  return (
    <div className={styles.container}>
      <header>
        <span>Tema:</span>
        <h2>{title}</h2>
      </header>
      <section>
        <span>{numberQuestions} preguntas</span>
      </section>
    </div>
  )
}
