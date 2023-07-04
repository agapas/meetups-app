import { useRouter } from "next/router";
import fs from "fs/promises";
import path from "path";
import { MeetupDetails } from "../components/meetups/MeetupDetails";

const MeetupDetailsPage = ({ meetupData }) => {
  const router = useRouter();

  const showAllMeetupsPage = () => {
    router.push("/");
  };

  if (!meetupData) {
    return <div>Loading...</div>;
  }

  return (
    <MeetupDetails
      {...meetupData}
      actions={[{ label: "Show All Meetups", onClickFn: showAllMeetupsPage }]}
    />
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data;
};

export const getStaticPaths = async () => {
  const data = await getData();

  const paths = data.meetups.map((meetup) => ({
    params: {
      meetupId: meetup.id,
    },
  }));

  return {
    paths,
    fallback: true, // for new meetups added via UI
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const meetupId = params.meetupId;

  const data = await getData();

  const meetupData = data.meetups.find((meetup) => meetup.id === meetupId);

  return {
    props: {
      meetupData,
    },
  };
};

export default MeetupDetailsPage;
