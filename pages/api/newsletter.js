import { insertSingleData, isEmailValid } from "../../utils";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!isEmailValid(userEmail)) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    insertSingleData("newsletter", "emails", { email: userEmail });

    res.status(201).json({ message: "Signed up successfully!" });
  }
};

export default handler;
