import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css"; 
import { useCart } from "./CartContext";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav className="navbar">
      <h1 className="logo">Shoping</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       
      </ul>
      <Link to="/cart" className="cart-icon-link">
      <div className="cart-icon">
        🛒
        {cart.length > 0 && (
          <span className="cart-badge">{cart.length}</span> 
        )}
        
      </div>
      </Link>
     
    </nav>
  );
};

export default Navbar;
