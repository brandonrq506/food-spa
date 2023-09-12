import { useReducer, useRef } from "react";
import { CartContext } from "./CartContext";
import { cartReducer, initialState } from "./cartReducer";
import { CartContextProps, CartMeal } from "../types";

type CartProviderProps = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    // const inicialLoad = useRef(true);

    //TODO: We need to implement this, and call it inside a useEffect with empty dependencies, so it only runs once.
    // const loadCart = (meals: CartMeal[]) => dispatch({ type: "LOAD_CART", payload: meals });
    const addMeal = (meal: CartMeal) => dispatch({ type: "ADD_MEAL", payload: meal });
    const removeMeal = (id: string) => dispatch({ type: "REMOVE_MEAL", payload: id });
    const clearCart = () => dispatch({ type: "CLEAR_CART" });

    // This should only run on the first render.
    // useEffect(() => {
    //      Probably we need to not call the function, but define dispatch({ type: "LOAD_CART", payload: cart });
    //      This to avoid the useEffect to run again everytime the function get's re-created.
    //     initialLoad.current = false;
    //     loadCart();
    // }, []);

    //This should run on every state change, after the initial render.
    // useEffect(() => {
    //     const sendUpdatedCart = async () => {
    //         try {
    //             await apiUpdateCart();
    //         } catch (error) {
    //             console.log('Error updating cart', error);
    //         }
    //     }

    //     sendUpdatedCart();
    // }, [state]);

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

/*
TODO:
The idea is that for every function, we need to add an API call.
import createMeal = useCreateMeal();

const addMeal = (meal: CartMeal) => {
        //Inside createMeal we have a try / catch, is in this Api call where we add useNotifications.
        await createMeal(meal);
        dispatch({ type: "ADD_MEAL", payload: meal });
} 
*/