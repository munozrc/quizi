import { useCallback, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { QuizStatus } from '../../../typings'
import demo from '../../../assets/demo.json'

export const useQuiz = () => {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentQuiz, setCurrentQuiz] = useState<QuizStatus>(undefined)
  const [isStartedQuiz, setStartedQuiz] = useState<boolean>(false)
  const [activeQuestion, setActiveQuestion] = useState<number>(0)

  useEffect(() => {
    const isStarted = searchParams.get('started') ?? 'false'
    const currentQuestion = searchParams.get('currentIndex') ?? '0'

    setSearchParams({ started: isStarted, currentIndex: currentQuestion })
    setStartedQuiz(isStarted === 'true')
    setActiveQuestion(+currentQuestion)

    if (id === 'demo') return setCurrentQuiz(demo)
    setCurrentQuiz(null)
  }, [id])

  const nextQuestion = useCallback(() => {
    // Check if there is a valid quiz
    if (currentQuiz == null) return

    // Get the total number of questions
    const questionsNumber = currentQuiz.questions.length - 1

    // Check if there is a next question
    if (activeQuestion < questionsNumber) {
      const value = activeQuestion + 1
      setActiveQuestion(value)
      setSearchParams({ started: 'true', currentIndex: value.toString() })
    }
  }, [currentQuiz, activeQuestion])

  const startQuiz = useCallback(() => {
    setStartedQuiz(true)
    setSearchParams({ started: 'true', currentIndex: activeQuestion.toString() })
  }, [])

  return {
    quiz: currentQuiz,
    question: currentQuiz?.questions[activeQuestion],
    isStartedQuiz,
    nextQuestion,
    startQuiz
  }
}
