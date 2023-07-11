import fs from "fs";
import path from "path";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const meetupsArray = JSON.parse(fileData).meetups;

    const newMeetup = { ...req.body, id: `m${meetupsArray.length + 1}` };
    const updatedData = { meetups: meetupsArray.concat([newMeetup]) };

    fs.writeFileSync(filePath, JSON.stringify(updatedData));
    res.status(201).json({ message: "Meetup created!", meetup: newMeetup });
  } else {
    res.status(200).json({ message: "This works!" });
  }
};

export default handler;
