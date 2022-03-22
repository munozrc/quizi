import { ReactNode } from 'react'

import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className={styles.container}>
      <header>
        <p>#1 de 10</p>
      </header>
      {children}
    </div>
  )
}
