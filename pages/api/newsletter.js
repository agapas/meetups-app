import { connectDatabase, insertSingleData } from "../../utils/db";
import { isEmailValid } from "../../utils/validation";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!isEmailValid(userEmail)) {
      res.status(422).json({ status: 422, message: "Invalid email address" });
      return;
    }

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
      await insertSingleData(client, "newsletter", { email: userEmail });
      res.status(201).json({
        status: 201,
        message: "Signed up successfully!",
        email: userEmail,
      });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Inserting data failed" });
    } finally {
      client.close();
    }
  }
};

export default handler;
