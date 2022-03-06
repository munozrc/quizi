import { Button } from '../components/Button'
import { InputField } from '../components/InputField'

import styles from './HomeScreen.module.css'

export const HomeScreen = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Quizi</h1>
        <p className={styles.description}>🙌 Saludos, ingresa el enlace a tu quiz para continuar.</p>
      </header>
      <div className={styles.wrapperActions}>
        <InputField />
        <Button>Cargar</Button>
      </div>
    </main>
  )
}
