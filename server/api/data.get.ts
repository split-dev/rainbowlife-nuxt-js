import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://airoot:8pFuZPgbDgBKADD@cluster0.tcwfuyu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
    await client.connect();
    const query = getQuery(event);

    const db = client.db('rainbowlife');
    const collection = db.collection('data');

    const dbRes = await collection.findOne({clientId: query.id});

    return dbRes || {};
})
