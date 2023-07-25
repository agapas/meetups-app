import Head from "next/head";
import { useState } from "react";
import { ResultMessage } from "../components/common/ResultMessage";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();
  const [resultMessage, setResultMessage] = useState();

  const clearResult = () => {
    if (error) setError(undefined);
    if (resultMessage) setResultMessage(undefined);
    if (isPending) setIsPending(false);
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
          type={error ? "error" : resultMessage ? "success" : "info"}
          isLarge={true}
          clearFallbackFn={clearResult}
        >
          {error ?? resultMessage ?? "Sending data..."}
        </ResultMessage>
      ) : null}
    </div>
  );
};

export default NewMeetupPage;
