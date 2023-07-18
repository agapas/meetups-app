import { MongoClient } from "mongodb";

const isEmailValid = (email) => {
  // A very basic check to follow a pattern: characters@characters.domain,
  // BUT better solution is sending an email with a link to click
  const regex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

  return !!(email && regex.test(email));
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!isEmailValid(userEmail)) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const uri =
      "mongodb+srv://tempUser:tempPasswTest123@cluster0.hfdpj4c.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db("newsletter");
    const collection = db.collection("emails");

    await collection.insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Signed up successfully!" });
  }
};

export default handler;
