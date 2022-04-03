import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Quiz, QuizSettings } from '../types'
import { getQuizFromGoogleDrive } from '../services'
import { getQuizSettingsFromLocalStorage, randomize } from '../utils'
import demo from '../../assets/demo.json'

const defaultValues: QuizSettings = {
  currentQuestionIndex: 0,
  currentQuestions: [],
  status: 'setup'
}

export const useQuiz = () => {
  const { id } = useParams()
  const [quiz, setQuiz] = useState<Quiz | null | undefined>(undefined)
  const [quizSettings, setQuizSettings] = useState<QuizSettings>(defaultValues)

  useEffect(() => {
    const data = getQuizSettingsFromLocalStorage()
    data && setQuizSettings(data as QuizSettings)

    if (id === 'demo') return setQuiz(demo)
    getQuizFromGoogleDrive(id ?? '').then(setQuiz)
  }, [id])

  const nextQuestion = useCallback(() => {
    const { status, currentQuestions, currentQuestionIndex } = quizSettings

    // Check if there is a valid quiz
    if (quiz == null || status === 'finished') return

    // Get the total number of questions
    const questionsNumber = currentQuestions.length - 1
    const isFinishedQuiz = currentQuestionIndex >= questionsNumber
    const increaseIndex = !isFinishedQuiz ? currentQuestionIndex + 1 : currentQuestionIndex

    // set new values
    setQuizSettings(prev => ({
      ...prev,
      status: isFinishedQuiz ? 'finished' : 'started',
      currentQuestionIndex: increaseIndex
    }))
  }, [quiz, quizSettings])

  const startQuiz = useCallback((range: number) => {
    if (quiz == null) return

    const randomQuestions = randomize(quiz.questions)
    const rangedQuestions = range > 0 ? randomQuestions.slice(0, range) : randomQuestions

    setQuizSettings({
      status: 'started',
      currentQuestions: rangedQuestions,
      currentQuestionIndex: 0
    })
  }, [quiz])

  const finishQuiz = useCallback(() => {
    setQuizSettings(defaultValues)
  }, [])

  return {
    quiz,
    question: quizSettings?.currentQuestions[quizSettings.currentQuestionIndex],
    questions: quizSettings?.currentQuestions,
    quizStatus: quizSettings.status,
    nextQuestion,
    startQuiz,
    finishQuiz
  }
}
