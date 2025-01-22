import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
      </header>
    </div>
  );
}

export default App;
