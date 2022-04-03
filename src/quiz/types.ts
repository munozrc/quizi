export interface OptionQuestion {
  key: number
  value: string
}

export interface Question {
  statement: string
  type: string
  answer: number
  options: Array<OptionQuestion>
}

export interface Quiz {
  title: string
  questions: Array<Question>
}

export interface QuizSettings {
  currentQuestionIndex: number
  currentQuestions: Question[]
  status: 'started' | 'setup' | 'finished' | string
}
