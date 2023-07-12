import { useEffect, useState } from "react";
import { ButtonList } from "../common/ButtonList";
import styles from "./MeetupDetails.module.css";

const imageExists = (src) => {
  var image = new Image();
  image.src = src;

  return image.complete && image.height > 0;
};

export const MeetupDetails = ({
  title,
  image,
  address,
  description,
  hideMoreInfo = false,
  actions,
}) => {
  const [isImageExists, setIsImageExists] = useState(true);

  useEffect(() => {
    setIsImageExists(imageExists(image));
  }, []);

  const className = hideMoreInfo ? "details" : "detailsWithMoreInfo";
  const imageSrc = isImageExists ? image : "/assets/Image_not_available.png";
  return (
    <div className={styles[className]}>
      <h2 className="center">{title}</h2>
      <img src={imageSrc} alt={title} />
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
