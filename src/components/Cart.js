import React, { useContext } from "react";
import { useCart } from "./CartContext";
import "./Cart.css";


const Cart = () => {

    const { cart } = useCart();
  
  return (
   
    <div className="container d-flex flex-column align-items-center">
        
        <h1 className="text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.name} style={{ width: "50px" }} />
                </td>
                <td>{item.name}</td>
                <td>{item.price} TL</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
