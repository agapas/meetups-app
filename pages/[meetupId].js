import { useRouter } from "next/router";
import { MeetupDetails } from "../components/meetups/MeetupDetails";

const MeetupDetailsPage = ({ meetupData }) => {
  const router = useRouter();

  const showAllMeetupsPage = () => {
    router.push("/");
  };

  return (
    <MeetupDetails
      {...meetupData}
      action={{ label: "Show All Meetups", onClickFn: showAllMeetupsPage }}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A first meetup",
        image:
          "https://cdn.shopify.com/s/files/1/0705/7793/articles/29587144738_600x.jpg",
        address: "33 Harcourt St, Saint Kevin's, Dublin 2",
        description: "This is a first meetup",
      },
    },
  };
};

export default MeetupDetailsPage;
