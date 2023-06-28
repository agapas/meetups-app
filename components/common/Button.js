import styles from "./Button.module.css";

export const Button = (props) => {
  const { type = "button", onClick, className, children } = props;
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
