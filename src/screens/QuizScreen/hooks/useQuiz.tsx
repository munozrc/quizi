import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { QuizStatus } from '../../../typings'
import demo from '../../../assets/demo.json'

export const useQuiz = () => {
  const { id } = useParams()
  const [currentQuiz, setCurrentQuiz] = useState<QuizStatus>(undefined)
  const [activeQuestion, setActiveQuestion] = useState<number>(0)

  useEffect(() => {
    if (id === 'demo') return setCurrentQuiz(demo)
    setCurrentQuiz(null)
  }, [id])

  const nextQuestion = useCallback(() => {
    // Check if there is a valid quiz
    if (currentQuiz == null) return

    // Get the total number of questions
    const questionsNumber = currentQuiz.questions.length - 1

    // Check if there is a next question
    if (activeQuestion < questionsNumber) setActiveQuestion(prev => prev + 1)
  }, [currentQuiz, activeQuestion])

  return {
    quiz: currentQuiz,
    question: currentQuiz?.questions[activeQuestion],
    nextQuestion
  }
}
