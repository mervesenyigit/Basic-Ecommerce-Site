import React, { useEffect, useState } from "react";
import './Button'
import Button from "./Button";
import "../App.css"; 
import { useCart } from "./CartContext";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();



  useEffect(() => {
    fetch("/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Veri çekilirken bir hata oluştu!");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []);


  

  return (
    <div>
      <h1  style={{ display: "flex", flexWrap: "wrap" ,justifyContent:'center'}}> </h1>
      <div className="cards">
      <div style={{ display: "flex", flexWrap: "wrap" ,justifyContent:'center'}}>
        {products.map((product) => (
          <div className="card" key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
            <h2>{product.name}</h2>
            <p>{product.price} TL</p>
           <Button  backgroundColor="#04BFBF" color="white"  onClick={() => addToCart(product)}>
          ADD
           </Button>

          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default ProductList;
