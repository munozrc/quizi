import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomeScreen } from './screens/HomeScreen'
import { QuizScreen } from './screens/QuizScreen'
import { QuizzesScreen } from './screens/QuizzesScreen'

import './main.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/quizzes/" element={<QuizzesScreen />} />
      <Route path="/quizzes/:id" element={<QuizScreen />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
