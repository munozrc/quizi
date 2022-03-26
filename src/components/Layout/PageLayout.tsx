import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import styles from './PageLayout.module.css'

interface PageLayoutProps {
  children: ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Quizi</h1>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.navbar__item}>Inicio</Link>
          <Link to="/quiz" className={styles.navbar__item}>Quizes</Link>
        </nav>
      </header>
      {children}
    </div>
  )
}
