import MeetupList from "@/components/meetups/MeetupList";

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
      "https://lh3.googleusercontent.com/p/AF1QipNaqwtQ8grcjK98uiHhBOtfgl0K3e_Z1Dy660eE=s1360-w1360-h1020",
    address: "Tara Building, Tara Street, Dublin 2",
    description: "This is a second meetup.",
  },
];

const HomePage = () => {
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
};

export default HomePage;
