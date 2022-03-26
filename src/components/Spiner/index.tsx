import styles from './styles.module.css'

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner__element} />
    </div>
  )
}
