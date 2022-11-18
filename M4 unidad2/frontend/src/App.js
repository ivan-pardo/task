import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import ClasesPage from './pages/ClasesPage';
import GaleriaPage from './pages/GaleriaPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='home' element={<HomePage />} />
          <Route path='productos' element={<ProductosPage />} />
          <Route path='clases' element={<ClasesPage />} />
          <Route path='galeria' element={<GaleriaPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;
