import styles from './MealList.module.css';
import { Card } from "@/components/elements";
import { MealItem } from '../MealItem/MealItem';

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
                    {data?.map((meal) =>
                        <MealItem key={meal.id} meal={meal} />
                    )}
                </ul>
            </Card>
        </section>
    );
};