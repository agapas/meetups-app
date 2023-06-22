import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
