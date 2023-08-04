const { MongoClient, ObjectId } = require("mongodb");

export const connectDatabase = async () => {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();

  return client;
};

export const insertSingleData = async (client, collectionName, dataObj) => {
  const db = client.db(process.env.DB_DATABASE);
  const collection = db.collection(collectionName);
  await collection.insertOne(dataObj);
};

export const getData = async (collectionName, fieldsObj) => {
  const client = await connectDatabase();
  const db = client.db(process.env.DB_DATABASE);
  const collection = db.collection(collectionName);

  const meetupsData = await collection
    .find({}, fieldsObj ? { projection: fieldsObj } : {})
    .toArray();

  client.close();

  return meetupsData;
};

export const getDataById = async (collectionName, id) => {
  const client = await connectDatabase();
  const db = client.db(process.env.DB_DATABASE);
  const collection = db.collection(collectionName);

  const data = await collection.findOne({ _id: new ObjectId(id) }, {});

  client.close();

  return data;
};
