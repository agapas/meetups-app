import { ButtonList } from "../common/ButtonList";
import styles from "./MeetupDetails.module.css";

export const MeetupDetails = ({
  title,
  image,
  address,
  description,
  hideMoreInfo = false,
  actions,
}) => {
  const className = hideMoreInfo ? "details" : "detailsWithMoreInfo";
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
      <ButtonList actions={actions} adjustMargin={!hideMoreInfo} />
    </div>
  );
};
