import { MongoClient } from "mongodb";
import { MeetupList } from "../components/meetups/MeetupList";
import { NewsletterRegistration } from "../components/newsletter-registration";

// ToDo: add Favourites page logic

const HomePage = (props) => {
  return (
    <>
      <NewsletterRegistration />
      <MeetupList meetups={props.meetups} />;
    </>
  );
};

export const getStaticProps = async () => {
  const uri =
    "mongodb+srv://tempUser:tempPasswTest123@cluster0.hfdpj4c.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db("meetups");
  const collection = db.collection("meetups");
  const meetups = await collection.find().toArray();
  client.close();

  const updatedMeetups = meetups.map((meetup) => {
    const { _id, ...rest } = meetup;
    return { ...rest, _id: _id.toString() };
  });

  return {
    props: { meetups: updatedMeetups },
    revalidate: 1800, // a half hour
  };
};

export default HomePage;
