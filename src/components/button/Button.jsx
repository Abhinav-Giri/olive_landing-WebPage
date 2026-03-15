import styles from "./Button.module.css";

/**
 * Reusable Button component
 *
 * props:
 *  - variant : primary | secondary
 *  - children : button label
 */
const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;