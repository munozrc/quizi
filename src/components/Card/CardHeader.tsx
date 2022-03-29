import styles from './CardHeader.module.css'

interface CardHeaderProps {
  currentIndex: number
  numberQuestions: number
}

export const CardHeader = ({ currentIndex, numberQuestions }: CardHeaderProps) => {
  return (
    <header className={styles.header}>
      <p className={styles.counter}><strong>{`#${currentIndex}`}</strong> de {numberQuestions}</p>
    </header>
  )
}
