import { useReducer } from "react";
import CartContext from "./CartContext";
import cartReducer, { initialState } from "./cartReducer";
import { CartContextProps, CartMeal } from "../types";

type CartProviderProps = {
    children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addMeal = (meal: CartMeal) => dispatch({ type: "ADD_MEAL", payload: meal });
    const removeMeal = (id: string) => dispatch({ type: "REMOVE_MEAL", payload: id });
    const clearCart = () => dispatch({ type: "CLEAR_CART" });

    const cartContext: CartContextProps = {
        meals: state.meals,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
        addMeal,
        removeMeal,
        clearCart,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;