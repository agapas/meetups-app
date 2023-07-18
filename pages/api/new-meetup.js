import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";

// TODO:
// - use env for db connection!
// - add error handling

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const uri =
      "mongodb+srv://tempUser:tempPasswTest123@cluster0.hfdpj4c.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db("meetups");
    const collection = db.collection("meetups");

    await collection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Meetup created!" });
  } else {
    res.status(200).json({ message: "This works!" });
  }
};

export default handler;
