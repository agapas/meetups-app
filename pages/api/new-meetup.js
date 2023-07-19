import { insertSingleData } from "../../utils";

// TODO:
// - use env for db connection!
// - add error handling

const handler = async (req, res) => {
  if (req.method === "POST") {
    insertSingleData("meetups", "meetups", req.body);

    res.status(201).json({ message: "Meetup created!" });
  } else {
    res.status(200).json({ message: "This works!" });
  }
};

export default handler;
