import { CartMeal, CartState } from "../types";

export const initialState: CartState = {
    meals: [],
    totalItems: 0,
    totalPrice: 0,
};

type MealAdder = (meals: CartMeal[], newMeal: CartMeal) => CartMeal[];
type MealRemover = (meals: CartMeal[], id: string) => CartMeal[];

const addMeal: MealAdder = (meals, newMeal) => [...meals, newMeal];
const removeMeal: MealRemover = (meals, mealId) => meals.filter(meal => meal.id !== mealId);

type MealUpdater = (meals: CartMeal[], newMeal: CartMeal, change: number) => CartMeal[];

const updateMealQuantity: MealUpdater = (meals, newMeal, change) => meals.map(meal =>
    meal.id === newMeal.id ?
        { ...meal, quantity: meal.quantity + change } :
        meal
);

const addOrUpdateMeal: MealAdder = (meals, newMeal) => {
    const isMealInCart = meals.some(meal => meal.id === newMeal.id);
    return isMealInCart ?
        updateMealQuantity(meals, newMeal, newMeal.quantity) :
        addMeal(meals, newMeal);
}

const removeOrUpdateMeal: MealRemover = (meals, mealId) => {
    const meal = meals.find(meal => meal.id === mealId)!
    const hasMoreThanOne = meal.quantity > 1;
    return hasMoreThanOne ?
        updateMealQuantity(meals, meal, -1) :
        removeMeal(meals, mealId);
}

const calculateTotalPrice = (meals: CartMeal[]) =>
    meals.reduce((total, meal) => total + (meal.price * meal.quantity), 0);

const calculateTotalItems = (meals: CartMeal[]) =>
    meals.reduce((total, meal) => total + meal.quantity, 0);

type AddMealAction = { type: "ADD_MEAL"; payload: CartMeal };
type RemoveMealAction = { type: "REMOVE_MEAL"; payload: string };
type ClearCartAction = { type: "CLEAR_CART" };

type CartActions = AddMealAction | RemoveMealAction | ClearCartAction;

const cartReducer = (state: CartState, action: CartActions) => {
    switch (action.type) {
        case "ADD_MEAL": {
            const newMeals = addOrUpdateMeal(state.meals, action.payload);
            return {
                meals: newMeals,
                totalItems: calculateTotalItems(newMeals),
                totalPrice: calculateTotalPrice(newMeals)
            }
        }
        case "REMOVE_MEAL": {
            const newMeals = removeOrUpdateMeal(state.meals, action.payload)
            return {
                meals: newMeals,
                totalItems: calculateTotalItems(newMeals),
                totalPrice: calculateTotalPrice(newMeals)
            }
        }
        case "CLEAR_CART": {
            return initialState;
        }
        default:
            throw new Error("Unknown action in cartReducer");
    }
};

export default cartReducer;