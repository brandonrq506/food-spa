import styles from './MealList.module.css';
import { Card } from "@/components/elements";

import { useGetMeals } from '../..';

export const MealList = () => {
    const { data, error, isLoading } = useGetMeals();
    if (isLoading) {
        return <div className={styles.mealsLoading}>Loading...</div>;
    }
    if (error) {
        return <div className={styles.mealsError}>Error</div>;
    }


    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {data?.map((meal) => (
                        <li key={meal.id}>{meal.name}</li>
                    ))}
                </ul>
            </Card>
        </section>
    );
};