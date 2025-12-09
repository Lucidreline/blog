import { Routes, Route, Link } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home.component'

function App() {
  return (
    <>
      <h1>This is app here</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
