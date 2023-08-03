import Head from "next/head";
import { MeetupList } from "../components/meetups/MeetupList";
import { NewsletterRegistration } from "../components/newsletter-registration";
import { getData } from "../utils/db";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name="description"
          content="Browse a list of highly active meetups that will allow you to evolve."
        />
      </Head>
      <NewsletterRegistration />
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getServerSideProps = async () => {
  const meetups = await getData("meetups");

  const updatedMeetups = meetups.map((meetup) => {
    const { _id, ...rest } = meetup;
    return { ...rest, id: _id.toString() };
  });

  return {
    props: { meetups: updatedMeetups },
  };
};

export default HomePage;
