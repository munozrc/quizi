import { MouseEvent, useMemo, useRef, useState } from 'react'

import { OptionQuestion } from '../types'
import { randomize } from '../utils'

export default function useQuestion (answer: number, styles: any, options: OptionQuestion[]) {
  const correctAnswerRef = useRef<HTMLButtonElement>(null)
  const randomOptions = useMemo(() => randomize(options), [options])
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
    randomOptions,
    checkAnswer
  }
}
