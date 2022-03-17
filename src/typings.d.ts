export interface Question {
  statement: string
  type: string
  answer: number
  options: Array<{key: number, value: string}>
}

export interface Quiz {
  title: string
  questions: Array<Question>
}
