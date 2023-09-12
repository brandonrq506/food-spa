import styles from './MealSummary.module.css';
import { Card } from '@/components/elements';

export const MealSummary = () => {
    return (
        <Card className={styles.summary}>
            <h2>First mid-size Project</h2>
            <p>
                I will be trying to implement some features I have never implemented before. All while I create a food ordering app. Some of the features I will be experiment with:
            </p>
            <ul>
                <li>Structuring folder by feature</li>
                <li>Component Composition</li>
                <li>Use of absolute paths</li>
                <li>Having a dark / light mode</li>
                <li>Have a notification system</li>
                <li>Fully functional Cart system</li>
                <li>Play with animations</li>
            </ul>
        </Card>
    );
};
