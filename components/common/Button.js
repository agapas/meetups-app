import styles from "./Button.module.css";

export const Button = (props) => {
  const { type = "button", onClick, children } = props;
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
