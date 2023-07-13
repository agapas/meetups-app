import { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonList } from "../common/ButtonList";
import styles from "./MeetupDetails.module.css";

const fallbackImage = "/assets/Image_not_available.png";

export const MeetupDetails = ({
  title,
  image,
  address,
  description,
  hideMoreInfo = false,
  actions,
}) => {
  const [imageError, setImageError] = useState(null);

  useEffect(() => {
    setImageError(null);
  }, [image]);

  const className = hideMoreInfo ? "details" : "detailsWithMoreInfo";

  return (
    <div className={styles[className]}>
      <h2 className="center">{title}</h2>
      <div className={styles.imageWrapper}>
        <Image
          fill
          className={imageError ? styles.withBorder : ""}
          src={imageError ? fallbackImage : image}
          alt={title}
          onError={setImageError}
        />
      </div>
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
