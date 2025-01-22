import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
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
      <h1>Ürünler</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
            <h2>{product.name}</h2>
            <p>{product.price} TL</p>
            <button>Sepete Ekle</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
