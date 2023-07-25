import Head from "next/head";
import { useState } from "react";
import { ResultMessage } from "../components/common/ResultMessage";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const [error, setError] = useState();
  const [resultInfo, setResultInfo] = useState();

  const clearResult = () => {
    if (error) setError(undefined);
    if (resultInfo) setResultInfo(undefined);
  };

  const handleOnAddMeetup = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result.status >= 400) {
      setError(result.message);
    } else {
      setResultInfo(result.message);
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
      <NewMeetupForm onAddMeetup={handleOnAddMeetup} />
      {error ? (
        <ResultMessage
          isError={true}
          isLarge={true}
          clearFallbackFn={clearResult}
        >
          {error}
        </ResultMessage>
      ) : resultInfo ? (
        <ResultMessage isLarge={true} clearFallbackFn={clearResult}>
          {resultInfo}
        </ResultMessage>
      ) : null}
    </div>
  );
};

export default NewMeetupPage;
