import styles from './Card.module.css';

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export const Card = ({ children, className }: CardProps) => {
    const classes = `${styles.card} ${className}`;
    return (
        <div className={classes}>
            {children}
        </div>
    );
};