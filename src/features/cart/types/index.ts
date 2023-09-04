import { Meal } from "../../../types";

export type CartMeal = Meal & { quantity: number };

export type CartState = {
    meals: CartMeal[];
    totalItems: number;
    totalPrice: number;
};

export type CartContextProps = CartState & {
    addMeal: (meal: CartMeal) => void;
    removeMeal: (id: string) => void;
    clearCart: () => void;
}