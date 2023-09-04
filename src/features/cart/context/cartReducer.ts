import { CartMeal } from "../types";

type CartState = {
    meals: CartMeal[];
    totalPrice: number;
};

export const initialState: CartState = {
    meals: [],
    totalPrice: 0,
};

const calculateTotal = (meals: CartMeal[]) => meals.reduce((total, meal) => total + (meal.price * meal.quantity), 0);


type MealAdder = (meals: CartMeal[], newMeal: CartMeal) => CartMeal[];
type MealRemover = (meals: CartMeal[], id: string) => CartMeal[];

const addMeal: MealAdder = (meals, newMeal) => [...meals, newMeal];
const removeMeal: MealRemover = (meals, mealId) => meals.filter(meal => meal.id !== mealId);

/* TODO 
The following formulas are very similar and can be abstracted, but Typescript is making it hard:
- addOrUpdateMeal / removeOrUpdateMeal
*/

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

type AddMealAction = { type: "ADD_MEAL"; payload: CartMeal };
type RemoveMealAction = { type: "REMOVE_MEAL"; payload: string };
type ClearCartAction = { type: "CLEAR_CART" };

type CartActions = AddMealAction | RemoveMealAction | ClearCartAction;

const cartReducer = (state: CartState, action: CartActions) => {
    switch (action.type) {
        case "ADD_MEAL": {
            const newMeals = addOrUpdateMeal(state.meals, action.payload);
            const newTotal = calculateTotal(newMeals);
            return { meals: newMeals, totalPrice: newTotal }
        }
        case "REMOVE_MEAL": {
            const newMeals = removeOrUpdateMeal(state.meals, action.payload)
            const newTotal = calculateTotal(newMeals);
            return { meals: newMeals, totalPrice: newTotal }
        }
        case "CLEAR_CART": {
            return initialState;
        }
        default:
            throw new Error("Unknown action in cartReducer");
    }
};

export default cartReducer;