// import styles from "./CartButton.module.css";
import useCart from "../../../features/cart/hooks/useCart";

const CartButton = () => {
    const { meals } = useCart();
    return (
        <div>
            <h2>CartIcon</h2>
            {meals.length}
        </div>
    );
};

export default CartButton;
