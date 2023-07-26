import Head from "next/head";
import { useState } from "react";
import { ResultMessage } from "../components/common/ResultMessage";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [resultMessage, setResultMessage] = useState(null);

  const clearResult = () => {
    if (error) setError(null);
    if (resultMessage) setResultMessage(null);
  };

  const handleOnAddMeetup = async (meetupData) => {
    setIsPending(true);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    setIsPending(false);

    if (result.status >= 400) {
      setError(result.message || "Something went wrong");
    } else {
      setResultMessage(result.message || "Success!");
    }
  };

  return (
    <div>
      <Head>
        <title>Add New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm
        onAddMeetup={handleOnAddMeetup}
        onClearForm={clearResult}
      />
      {error || resultMessage || isPending ? (
        <ResultMessage
          message={error ?? resultMessage}
          type={error ? "error" : resultMessage ? "success" : "info"}
          isLarge={true}
          clearFallbackFn={clearResult}
        />
      ) : null}
    </div>
  );
};

export default NewMeetupPage;
