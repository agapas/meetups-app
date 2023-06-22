import { Button } from "../common/Button";
import { Card } from "../common/Card";
import styles from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const { title, image, address } = props;
  return (
    <li className={styles.meetup}>
      <Card>
        <h3>{title}</h3>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <div>Address:</div>
          <address>{address}</address>
        </div>
        <Button>Show Details</Button>
      </Card>
    </li>
  );
};

export default MeetupItem;
