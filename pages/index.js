import { MeetupList } from "../components/meetups/MeetupList";
import { NewsletterRegistration } from "../components/newsletter-registration";
import { getData } from "../utils";

// ToDo: add Favourites page logic

const HomePage = (props) => {
  return (
    <>
      <NewsletterRegistration />
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  const meetups = await getData("meetups", "meetups");

  const updatedMeetups = meetups.map((meetup) => {
    const { _id, ...rest } = meetup;
    return { ...rest, id: _id.toString() };
  });

  return {
    props: { meetups: updatedMeetups },
    revalidate: 1800, // a half hour
  };
};

export default HomePage;
