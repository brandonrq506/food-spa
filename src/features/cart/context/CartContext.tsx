import { createContext } from "react";
import { CartContextProps } from "../types";

const CartContext = createContext<CartContextProps | undefined>(undefined);
export default CartContext;
