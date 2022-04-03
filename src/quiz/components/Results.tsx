import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

import styles from './Results.module.css'

interface ResultsProps {
  isVisible: boolean,
  handleFinishedQuiz: () => void
}

export const Results = ({ isVisible, handleFinishedQuiz }: ResultsProps) => {
  return (
    <Card isVisible={isVisible}>
      <div className={styles.wrapper}>
        <h2>Has Terminado! 🙌</h2>
        <Button onClick={handleFinishedQuiz}>Entendido</Button>
      </div>
    </Card>
  )
}
