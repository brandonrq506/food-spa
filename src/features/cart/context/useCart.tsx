import { useContext } from "react";
import { CartContext } from "./CartContext";
import { CartContextProps } from "../types";

export const useCart = (): CartContextProps => {
    const cartContext = useContext(CartContext);
    if (!cartContext) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return cartContext;
};