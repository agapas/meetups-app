import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const handleOnAddMeetup = (meetupData) => {
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={handleOnAddMeetup} />;
};

export default NewMeetupPage;
