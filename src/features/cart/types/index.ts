import { Meal } from "../../../types";

export type CartMeal = Meal & { quantity: number };

export interface CartContextProps {
    meals: CartMeal[];
    totalPrice: number;
    addMeal: (meal: CartMeal) => void;
    removeMeal: (id: string) => void;
    clearCart: () => void;
}