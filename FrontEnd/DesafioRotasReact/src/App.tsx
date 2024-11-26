import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'
import Page from './routes/Page'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
