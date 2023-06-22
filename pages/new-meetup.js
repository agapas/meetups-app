import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const handleOnAddMeetup = (meetupData) => {
    console.log(meetupData);
  };

  return (
    <div>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleOnAddMeetup} />
    </div>
  );
};

export default NewMeetupPage;
