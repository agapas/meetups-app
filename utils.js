const { MongoClient, ObjectId } = require("mongodb");

const getConnectedMongoClient = async () => {
  const uri =
    "mongodb+srv://tempUser:tempPasswTest123@cluster0.hfdpj4c.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);
  await client.connect();

  return client;
};

export const getData = async (collectionName, fieldsObj) => {
  const client = await getConnectedMongoClient();
  const db = client.db("meetupsApp");
  const collection = db.collection(collectionName);

  const meetupsData = await collection
    .find({}, fieldsObj ? { projection: fieldsObj } : {})
    .toArray();

  client.close();

  return meetupsData;
};

export const getDataById = async (collectionName, id) => {
  const client = await getConnectedMongoClient();
  const db = client.db("meetupsApp");
  const collection = db.collection(collectionName);

  const data = await collection.findOne({ _id: new ObjectId(id) }, {});

  client.close();

  return data;
};

export const insertSingleData = async (collectionName, dataObj) => {
  const client = await getConnectedMongoClient();
  const db = client.db("meetupsApp");
  const collection = db.collection(collectionName);

  const result = await collection.insertOne(dataObj);

  client.close();

  return result;
};

export const isEmailValid = (email) => {
  // A very basic check to follow a pattern: characters@characters.domain,
  // BUT better solution is sending an email with a link to click
  const regex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

  return !!(email && regex.test(email));
};
