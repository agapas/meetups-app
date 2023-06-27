import { MeetupItem } from "./MeetupItem";

export const MeetupList = ({ meetups }) => {
  return (
    <ul>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
};
