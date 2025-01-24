import React, { useContext } from "react";
import { useCart } from "./CartContext";

const Cart = () => {

    const { cart } = useCart();
  
  return (
   
    <div className="container d-flex flex-column align-items-center">
      <h1 className="d-block">Shopping Cart</h1>
      <div className=" ">
      {cart.length === 0 ? (
        
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} style={{ width: "50px" }} />
              <span>{item.name} - {item.price} TL</span>
            </div>
          ))}
        </ul>
      )}
      </div>
     
   
    </div>
  );
};

export default Cart;
