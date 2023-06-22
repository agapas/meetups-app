import styles from "./Card.module.css";

export const Card = (props) => (
  <div className={styles.card}>{props.children}</div>
);
