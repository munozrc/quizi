import { PageLayout } from '../components/Layout'

import styles from './QuizzesScreen.module.css'

export const QuizzesScreen = () => {
  return <PageLayout>
    <main className={styles.container}>
      <header>
        <h2>Todos tus quizis 🙌</h2>
        <p>Aqui se mostraran todos las pruebas que haz agregado o a las cuales haz aplicado directamente</p>
      </header>
      <ul className={styles.wrapper__quizzes}>
        <li className={styles.quiz__item}>
          <h3>Generalidades de la economía</h3>
            <p>Preguntas 2</p>
        </li>
      </ul>
    </main>
  </PageLayout>
}
