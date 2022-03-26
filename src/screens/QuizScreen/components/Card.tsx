import { ReactNode } from 'react'

import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
