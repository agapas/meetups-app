import { MeetupList } from "../components/meetups/MeetupList";

// ToDO: add Favourites page logic

const DUMMY_DATA = [
  {
    id: 1,
    title: "A first meetup",
    image:
      "https://cdn.shopify.com/s/files/1/0705/7793/articles/29587144738_600x.jpg",
    address: "33 Harcourt St, Saint Kevin's, Dublin 2",
    description: "This is a first meetup.",
  },
  {
    id: 2,
    title: "A second meetup",
    image:
      "https://www.coworker.com/mag/wp-content/uploads/2022/10/The-Tara-Building-1-min-scaled.jpg",
    address: "Tara Building, Tara Street, Dublin 2",
    description: "This is a second meetup.",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_DATA,
    },
    revalidate: 10,
  };
};

export default HomePage;
