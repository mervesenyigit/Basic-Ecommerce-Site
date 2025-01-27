import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const[piece,setPiece]=useState(1);

 

   const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);

  };
    
    const deleteCard = (index) => {
        const newCart = cart.filter((_, i) => i !== index); 
        setCart(newCart);
        setPiece(1);
      };

      const incPiece = (index) => {
        const updatedCart = cart.map((item, i) =>
            i === index ? { ...item, piece: item.piece + 1 } : item
          );
       
         
         
          setCart(updatedCart);
      };
      const decPiece = (index) => {
        const updatedCart = cart.map((item, i) =>
            i === index ? { ...item, piece: item.piece - 1 } : item
          );
        if(updatedCart[index].piece<=1){
         updatedCart[index].piece=1;
        }
 
          setCart(updatedCart);
        
      }
    
    



  return (
    <CartContext.Provider value={{ cart, addToCart ,deleteCard ,incPiece,decPiece,piece}}> 
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
