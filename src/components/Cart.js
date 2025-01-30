import React, { useContext, useState } from "react";
import { useCart } from "./CartContext";
import "./Cart.css";
import Button from "./Button";



const Cart = () => {

    const { cart, deleteCard ,incPiece,decPiece  } = useCart(); 
 


  return (
   
    <div className="container d-flex flex-column align-items-center">
        
        <h1 className="text-center">Shopping Cart</h1>

        <div className="cart-table">
        {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <table className="table ">
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Piece</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                    <tr key={index}>
                        <td>
                        <img src={item.image} alt={item.name} style={{ width: "50px" }} />
                        </td>
                        <td>{item.name}</td>
                        <td>
                            <Button  backgroundColor="#04BFBF" color="white" onClick={()=>decPiece(index)}>-</Button>
                            {item.piece}
                            <Button  backgroundColor="#04BFBF" color="white" onClick={()=>incPiece(index)} >+</Button>
                   
                          
                        </td>
                        <td>{item.price} TL</td>
                        <td>{item.price * item.piece} TL</td>
                        <td>
                            {/* <Button></Button> */}
                            <Button  backgroundColor="#04BFBF" color="white" onClick={() => deleteCard(index)}><i className="bi bi-trash3" ></i></Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
        </div >
      
            <div className="total">
                <h3>
                    {cart.length === 0 
                        ? ""
                        : `Total: ${cart.reduce((acc, item) => acc + item.price * item.piece, 0)} TL`}
                </h3>
            </div>

    </div>
  );
};

export default Cart;
