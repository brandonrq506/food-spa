import { useContext } from "react";
import CartContext from "../context/CartContext";
import { CartContextProps } from "../types";

const useCart = (): CartContextProps => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cartContext;
};

export default useCart;
