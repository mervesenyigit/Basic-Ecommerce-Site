import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { CartProvider } from "./components/CartContext"; 



const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
