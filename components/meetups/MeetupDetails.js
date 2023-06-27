import { Button } from "../common/Button";
import styles from "./MeetupDetails.module.css";

export const MeetupDetails = ({
  title,
  image,
  address,
  description,
  hideMoreInfo = false,
  action,
}) => {
  const className = hideMoreInfo ? "details" : "detailsWithMoreInfo";
  const { label, onClickFn } = action || {};

  return (
    <div className={styles[className]}>
      <h2 className="center">{title}</h2>
      <img src={image} alt={title} />
      {!hideMoreInfo ? (
        <div className={styles.infoWrapper}>
          <div className={styles.label}>Address:</div>
          <address>{address}</address>
          <div className={styles.label}>Info:</div>
          <div>{description}</div>
        </div>
      ) : null}
      {label && onClickFn ? <Button onClick={onClickFn}>{label}</Button> : null}
    </div>
  );
};
