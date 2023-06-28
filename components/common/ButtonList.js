import { Button } from "./Button";
import styles from "./ButtonList.module.css";

export const ButtonList = ({ actions = [], adjustMargin = false }) => (
  <div className={`${styles.actions} ${adjustMargin ? styles.withMargin : ""}`}>
    {actions.map((action = {}, index) => {
      const { label, onClickFn } = action;
      return (
        <Button key={index} onClick={onClickFn}>
          {label}
        </Button>
      );
    })}
  </div>
);
