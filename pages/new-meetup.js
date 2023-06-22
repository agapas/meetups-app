import Layout from "../components/layout/Layout";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const handleOnAddMeetup = (meetupData) => {
    console.log(meetupData);
  };

  return (
    <Layout>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleOnAddMeetup} />
    </Layout>
  );
};

export default NewMeetupPage;
