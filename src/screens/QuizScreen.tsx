import styles from './QuizScreen.module.css'

export const QuizScreen = () => {
  return (
    <main className={styles.container}>
      <section className={styles.quiz}>
        <header className={styles.quiz__hero}>
          <p className={styles.quiz__question}>If David&apos;s age is 27 years old in 2011. What his age in 2003?</p>
        </header>
        <footer className={styles.quiz__answers}>
          <button className={styles.quiz__answer}>19 years</button>
          <button className={styles.quiz__answer}>37 years</button>
          <button className={styles.quiz__answer}>20 years</button>
          <button className={styles.quiz__answer}>17 years</button>
        </footer>
      </section>
    </main>
  )
}
