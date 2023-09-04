// import styles from "./CartButton.module.css";
import { useCart } from "@/features/cart";

export const CartButton = () => {
    const { totalItems } = useCart();
    return (
        <div>
            {totalItems}
        </div>
    );
};
