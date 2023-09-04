import { CartMeal } from "../types";

type CartState = {
    meals: CartMeal[];
    totalPrice: number;
};

export const initialState: CartState = {
    meals: [],
    totalPrice: 0,
};

type AddMealAction = { type: "ADD_MEAL"; payload: CartMeal };
type RemoveMealAction = { type: "REMOVE_MEAL"; payload: string };
type ClearCartAction = { type: "CLEAR_CART" };

type CartActions = AddMealAction | RemoveMealAction | ClearCartAction;

const calculateTotal = (meals: CartMeal[]) => meals.reduce((total, meal) => total + (meal.price * meal.quantity), 0);


type MealAdder = (meals: CartMeal[], newMeal: CartMeal) => CartMeal[];
type MealRemover = (meals: CartMeal[], id: string) => CartMeal[];

const addMeal: MealAdder = (meals, newMeal) => [...meals, newMeal];

const removeMeal: MealRemover = (meals, mealId) => meals.filter(meal => meal.id !== mealId);

const updateMeal: MealAdder = (meals, newMeal) => meals.map(meal =>
    meal.id === newMeal.id ?
        { ...meal, quantity: meal.quantity + newMeal.quantity } :
        meal
)

const updateMeal2: MealRemover = (meals, mealId) => meals.map(meal =>
    meal.id === mealId ?
        { ...meal, quantity: meal.quantity - 1 } :
        meal
)

const addOrUpdateMeal: MealAdder = (meals, newMeal) => {
    const isMealInCart = meals.some(meal => meal.id === newMeal.id);
    return isMealInCart ?
        updateMeal(meals, newMeal) :
        addMeal(meals, newMeal);
}

const removeOrUpdateMeal: MealRemover = (meals, mealId) => {
    const hasMoreThanOne = meals.find(meal => meal.id === mealId)!.quantity > 1;
    return hasMoreThanOne ?
        updateMeal2(meals, mealId) :
        removeMeal(meals, mealId);
}

const cartReducer = (state: CartState, action: CartActions) => {
    switch (action.type) {
        case "ADD_MEAL": {
            const newMeals = addOrUpdateMeal(state.meals, action.payload);
            const newTotal = calculateTotal(newMeals);
            return { meals: newMeals, totalPrice: newTotal }
        }
        case "REMOVE_MEAL": {
            //This is currently wrong. The idea is to decrease 'quantity' by 1 if there are multiple of that meal
            //Of remove the meal if there is only 1 before the substraction.
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
