import styles from "./Button.module.css";

export const Button = (props) => {
  const { type = "button", onClick, children } = props;
  return (
    <div className={styles.actions}>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
