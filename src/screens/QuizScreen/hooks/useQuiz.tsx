import { useCallback, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { QuizStatus } from '../../../typings'
import demo from '../../../assets/demo.json'

export const useQuiz = () => {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentQuiz, setCurrentQuiz] = useState<QuizStatus>(undefined)
  const isStartedQuiz: boolean = searchParams.get('started') === 'true' ?? 'false'
  const activeQuestion: number = parseInt(searchParams.get('currentIndex') ?? '0')

  useEffect(() => {
    if (id === 'demo') return setCurrentQuiz(demo)
    setCurrentQuiz(null)
    setSearchParams({ started: 'false', currentIndex: '0' })
  }, [id])

  const nextQuestion = useCallback(() => {
    // Check if there is a valid quiz
    if (currentQuiz == null) return

    // Get the total number of questions
    const questionsNumber = currentQuiz.questions.length - 1

    // Check if there is a next question
    if (+activeQuestion > questionsNumber) return

    // Set new values
    const newActiveQuestion = activeQuestion + 1
    setSearchParams({ started: 'true', currentIndex: newActiveQuestion.toString() })
  }, [currentQuiz, activeQuestion])

  const startQuiz = useCallback((range: number) => {
    setSearchParams({
      started: 'true',
      currentIndex: activeQuestion.toString(),
      range: range.toString()
    })
  }, [])

  return {
    quiz: currentQuiz,
    question: currentQuiz?.questions[activeQuestion],
    isStartedQuiz,
    nextQuestion,
    startQuiz
  }
}
