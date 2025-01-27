import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext"; 
import "bootstrap-icons/font/bootstrap-icons.css";




const App = () => {


  return (
    <CartProvider>  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </CartProvider>
  );
};

export default App;
