import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './main.css'
import { HomeScreen } from './screens/HomeScreen'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
