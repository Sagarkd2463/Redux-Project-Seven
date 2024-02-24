import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartPage from './components/CartPage';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ProductCard />}/>
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
