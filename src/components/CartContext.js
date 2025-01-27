import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
 

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);

  };
    // Ürün silme fonksiyonu
    const deleteCard = (index) => {
        const newCart = cart.filter((_, i) => i !== index); 
        setCart(newCart);
      };

  return (
    <CartContext.Provider value={{ cart, addToCart ,deleteCard}}> 
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
