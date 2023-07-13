import { MeetupItem } from "./MeetupItem";

export const MeetupList = ({ meetups }) => {
  if (!meetups.length) {
    return <h3 className="center">There is no meetups to display yet</h3>;
  }

  return (
    <ul>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
};
