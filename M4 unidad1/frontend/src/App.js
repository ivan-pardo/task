import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import ClasesPage from "./pages/ClasesPage";
import ProductosPage from "./pages/ProductosPage";

function App() {
    return (
        <div className="App">
            <Header />

            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="clases" element={<ClasesPage />} />
                    <Route path="productos" element={<ProductosPage />} />
                    <Route path="contacto" element={<ContactoPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
