import styles from './MealItem.module.css';
import { Meal } from "@/types";

type MealItemProps = {
    meal: Meal;
};

export const MealItem = ({ meal }: MealItemProps) => {
    return (
        <li className={styles.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={styles.description}>{meal.description}</div>
                <div className={styles.price}>${meal.price}</div>
            </div>
            <div>
                <p>Here you can add more</p>
            </div>
        </li>
    );
};