import { MouseEvent, useRef, useState } from 'react'

export default function useQuestion (answer: number, styles: any) {
  const correctAnswerRef = useRef<HTMLButtonElement>(null)
  const [isQuestionAnswered, setIsQuestionAnswered] = useState<boolean>(false)

  const checkAnswer = ({ target }: MouseEvent<HTMLElement>) => {
    // Get key value of clicked button
    const { classList, name } = target as HTMLButtonElement
    const keyValue = +name

    // Valid if the question has already been answered
    if (isQuestionAnswered) return
    else setIsQuestionAnswered(prev => !prev)

    // Validate if the question is not correct
    if (keyValue !== answer) {
      correctAnswerRef.current?.classList.add(styles.correct__notselected)
      classList.add(styles.wrong)
      return
    }

    // Execute if the question is correct
    classList.add(styles.correct)
  }

  return {
    ref: correctAnswerRef,
    isQuestionAnswered,
    checkAnswer
  }
}
