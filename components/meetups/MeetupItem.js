import { useRouter } from "next/router";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { MeetupDetails } from "../meetups/MeetupDetails";
import styles from "./MeetupItem.module.css";

export const MeetupItem = (props) => {
  const router = useRouter();

  // Used this approach to practice programmatic navigation in the nextJs,
  // but using just the Link comp instead of the Button comp would be better
  const showDetails = () => {
    router.push(`/${props.id}`);
  };

  return (
    <li className={styles.meetup}>
      <Card>
        <MeetupDetails {...props} hideMoreInfo />
        <Button onClick={showDetails}>Show Details</Button>
      </Card>
    </li>
  );
};
