import styles from "./CartButton.module.css";
import { CartIcon } from "../CartIcon/CartIcon";

import { useCart } from "@/features/cart";

type CartButtonProps = {
    children?: React.ReactNode;
};

export const CartButton = ({ children = '' }: CartButtonProps) => {
    const { totalItems } = useCart();
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>{children}</span>
            <span className={styles.badge}>
                {totalItems}
            </span>
        </button>
    );
};
//TODO: Missing heart-beat animation when totalItems are updated.