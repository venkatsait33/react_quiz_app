import QuizApp from './apps/QuizApp'
import QuizFormApp from './apps/QuizForm'
import {  Route, Routes } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<QuizApp />} />
        <Route path='/form' element={<QuizFormApp />} />
      </Routes>
      <div>

      </div>
    </div>
  )
}

export default App