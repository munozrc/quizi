import { MouseEvent, useEffect, useState } from 'react'

import { Quiz } from '../typings'
import demo from '../assets/demo.json'

export const useQuiz = (id: string | undefined) => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null | undefined >(undefined)
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [isQuestionAnswered, setIsQuestionAnswered] = useState<boolean>(false)

  useEffect(() => {
    if (id === 'demo') setCurrentQuiz(demo)
    else setCurrentQuiz(null)
  }, [id])

  const checkAnswer = (event: MouseEvent<HTMLButtonElement>, key: number) => {
    const { target } = event
    const { classList } = target as HTMLButtonElement
    const currentAnswer = currentQuiz?.questions[activeQuestion].answer

    if (key === currentAnswer) classList.add('correct')
    else classList.add('wrong')

    setIsQuestionAnswered(true)
  }

  const nextQuestion = () => {
    if (isQuestionAnswered && activeQuestion < 2) {
      setActiveQuestion(prev => prev + 1)
      setIsQuestionAnswered(false)
    }
  }

  return {
    quiz: currentQuiz,
    question: currentQuiz?.questions[activeQuestion],
    isQuestionAnswered,
    checkAnswer,
    nextQuestion
  }
}
