import styles from "./Header.module.css";
import { CartButton } from "@/features/cart";

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1>React Meals</h1>
            <CartButton />
        </header>
    );
};