import styles from "./Button.module.css";

export const Button = (props) => {
  const { type = "button", onClick, title, children } = props;
  return (
    <button className={styles.btn} type={type} title={title} onClick={onClick}>
      {children}
    </button>
  );
};
