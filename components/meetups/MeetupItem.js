import { useRouter } from "next/router";
import { Card } from "../common/Card";
import { MeetupDetails } from "../meetups/MeetupDetails";
import styles from "./MeetupItem.module.css";

// TODO: add logic for the Favourites

export const MeetupItem = (props) => {
  const router = useRouter();

  // Used the approach with the next's router (and button with onClick event)
  // to practice programmatic navigation in the nextJs, but using here just
  // the Link comp would be better
  const showDetails = () => {
    router.push(`/${props.id}`);
  };

  return (
    <li className={styles.meetup}>
      <Card>
        <MeetupDetails
          {...props}
          hideMoreInfo
          actions={[{ label: "Show Details", onClickFn: showDetails }]}
        />
      </Card>
    </li>
  );
};
