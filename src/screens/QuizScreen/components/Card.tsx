import { ReactNode } from 'react'

import styles from './Card.module.css'

interface CardProps {
  current: number
  length: number
  children: ReactNode
}

export const Card = ({ current, length, children }: CardProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.counter}><strong>{`#${current}`}</strong> de {length}</p>
      </header>
      {children}
    </div>
  )
}
