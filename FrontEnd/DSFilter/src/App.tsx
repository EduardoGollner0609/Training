import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import ListingBody from './components/ListingBody'
import * as productService from './services/product-service';
import { ContextProductCount } from './utils/context-products';

function App() {

  const [contextProductCount, setContextProductCount] = useState<number>(productService.findAllSortedPrice.length);

  return (

    <ContextProductCount.Provider value={{ contextProductCount, setContextProductCount }}>
      <Header />
      <ListingBody />

    </ContextProductCount.Provider>



  )
}

export default App
