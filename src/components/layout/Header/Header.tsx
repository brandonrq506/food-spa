import styles from "./Header.module.css";
import CartButton from "../CartButton/CartButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>React Meals</h1>
      <CartButton />
    </header>
  );
};

export default Header;
