import { connectDatabase, insertSingleData } from "../../utils/db";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const newMeetup = req.body;

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res
        .status(500)
        .json({ status: 500, message: "Connecting to the database failed" });
      return;
    }

    try {
      await insertSingleData(client, "meetups", newMeetup);
      res.status(201).json({
        status: 201,
        message: "Meetup created!",
        meetup: newMeetup,
      });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Inserting data failed" });
    } finally {
      client.close();
    }
  } else {
    res.status(200).json({ status: 200, message: "This works!" });
  }
};

export default handler;
