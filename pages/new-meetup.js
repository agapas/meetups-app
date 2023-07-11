import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const handleOnAddMeetup = (meetupData) => {
    fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("data: ", data));
  };

  return <NewMeetupForm onAddMeetup={handleOnAddMeetup} />;
};

export default NewMeetupPage;
