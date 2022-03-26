import { ReactNode } from 'react'

import styles from './Card.module.css'

interface CardProps {
  isVisible: boolean
  children: ReactNode
}

export const Card = ({ isVisible, children }: CardProps) => {
  if (!isVisible) return null

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
