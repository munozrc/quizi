import { useCallback, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { QuizStatus } from '../../../typings'
import demo from '../../../assets/demo.json'

type CurrentQuizStatus = 'started' | 'making' | 'finished' | string

export const useQuiz = () => {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentQuiz, setCurrentQuiz] = useState<QuizStatus>(undefined)
  const quizStatus: CurrentQuizStatus = searchParams.get('status') ?? 'making'
  const activeQuestion: number = parseInt(searchParams.get('currentIndex') ?? '0')
  const rangeQuestion: number = parseInt(searchParams.get('range') ?? '0')

  useEffect(() => {
    if (id === 'demo') return setCurrentQuiz(demo)
    setCurrentQuiz(null)
  }, [id])

  const nextQuestion = useCallback(() => {
    // Check if there is a valid quiz
    if (currentQuiz == null || quizStatus === 'finished') return

    // Get the total number of questions
    const questionsNumber = currentQuiz.questions.length - 1
    let status = 'started'
    let newActiveQuestion = activeQuestion

    // Check if there is a next question
    if (newActiveQuestion < questionsNumber) newActiveQuestion++
    else status = 'finished'

    // set new values
    setSearchParams({
      status,
      currentIndex: newActiveQuestion.toString(),
      range: rangeQuestion.toString()
    })
  }, [currentQuiz, activeQuestion])

  const startQuiz = useCallback((range: number) => {
    setSearchParams({
      status: 'started',
      currentIndex: activeQuestion.toString(),
      range: range.toString()
    })
  }, [])

  return {
    quiz: currentQuiz,
    question: currentQuiz?.questions[activeQuestion],
    quizStatus,
    nextQuestion,
    startQuiz
  }
}
