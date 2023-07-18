import { useRouter } from "next/router";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const handleOnAddMeetup = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();

    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={handleOnAddMeetup} />;
};

export default NewMeetupPage;
