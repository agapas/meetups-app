import styles from "./Button.module.css";

export const Button = ({ type = "button", onClick, children }) => (
  <div className={styles.actions}>
    <button type={type} onClick={onClick}>
      {children}
    </button>
  </div>
);
