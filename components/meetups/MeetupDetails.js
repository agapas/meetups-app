import styles from "./MeetupDetails.module.css";

export const MeetupDetails = ({ title, image, address, description }) => {
  return (
    <div className={styles.details}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      {address ? (
        <>
          <div className={styles.label}>Address:</div>
          <address>{address}</address>
        </>
      ) : null}
      {description ? (
        <>
          <div className={styles.label}>Info:</div>
          <div>{description}</div>
        </>
      ) : null}
    </div>
  );
};
