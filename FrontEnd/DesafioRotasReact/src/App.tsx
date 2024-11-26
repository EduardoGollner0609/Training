import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'
import Page from './routes/Page'
import ProductPage from './routes/ProductPage'
import ProductComputer from './routes/ProductComputer'
import ProductEletronic from './routes/ProductEletronic'
import ProductBook from './routes/ProductBook'
import AboutPage from './routes/AboutPage'
import NotFoundPage from './routes/404Page'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />}>
            <Route path="computers" element={<ProductComputer />} />
            <Route path="eletronics" element={<ProductEletronic />} />
            <Route path="books" element={<ProductBook />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
