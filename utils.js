const { MongoClient, ObjectId } = require("mongodb");

const connectMongoClient = async () => {
  const uri =
    "mongodb+srv://tempUser:tempPasswTest123@cluster0.hfdpj4c.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);
  await client.connect();

  return client;
};

export const getData = async (dbName, collectionName, fieldsObj) => {
  const client = await connectMongoClient();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const meetupsData = await collection
    .find({}, fieldsObj ? { projection: fieldsObj } : {})
    .toArray();

  client.close();

  return meetupsData;
};

export const getDataById = async (dbName, collectionName, id) => {
  const client = await connectMongoClient();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const data = await collection.findOne({ _id: new ObjectId(id) }, {});

  client.close();

  return data;
};
