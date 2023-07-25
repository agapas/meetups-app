import Head from "next/head";
import { useRouter } from "next/router";
import { MeetupDetails } from "../components/meetups/MeetupDetails";
import { getData, getDataById } from "../utils/db";

const MeetupDetailsPage = ({ meetupData }) => {
  const router = useRouter();

  const showAllMeetupsPage = () => {
    router.push("/");
  };

  if (!meetupData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetails
        {...meetupData}
        actions={[{ label: "Show All Meetups", onClickFn: showAllMeetupsPage }]}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const meetupsData = await getData("meetups", { _id: 1 });

  const paths = meetupsData.map((meetup) => ({
    params: {
      meetupId: meetup._id.toString(),
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

  const meetupData = await getDataById("meetups", meetupId);

  if (!meetupData) {
    return {
      notFound: true,
    };
  }

  const { _id, ...rest } = meetupData;

  return {
    props: {
      meetupData: { ...rest, id: meetupId },
    },
  };
};

export default MeetupDetailsPage;
