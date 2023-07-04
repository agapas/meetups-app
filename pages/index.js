import fs from "fs/promises";
import path from "path";
import { MeetupList } from "../components/meetups/MeetupList";

// ToDo: add Favourites page logic

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return {
    props: { meetups: data.meetups },
    revalidate: 10,
  };
};

export default HomePage;
