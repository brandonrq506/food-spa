// import styles from "./CartButton.module.css";
import useCart from "../../hooks/useCart";

export const CartButton = () => {
    const { totalItems } = useCart();
    return (
        <div>
            {totalItems}
        </div>
    );
};
