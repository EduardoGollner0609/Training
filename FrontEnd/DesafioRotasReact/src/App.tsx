import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'
import Page from './routes/Page'
import ProductPage from './routes/ProductPage'
import ProductComputer from './routes/ProductComputer'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />}>
            <Route path="computers" element={<ProductComputer />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
