import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import ListingBody from './components/ListingBody'
import * as productService from './services/product-service';

function App() {

  const [contextProductCount, setContextProductCount] = useState<number>(productService.findAllSortedPrice.length);

  return (
    <>
      <Header />
      <ListingBody />
    </>

  )
}

export default App
