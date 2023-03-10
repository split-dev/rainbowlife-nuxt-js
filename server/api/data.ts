import fs from 'fs';
import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://airoot:8pFuZPgbDgBKADD@cluster0.tcwfuyu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
    await client.connect();

    const db = client.db('rainbowlife');
    const collection = db.collection('data');
    const body = await readBody(event);
    let dbRes;

    if (event.node.req.method === 'POST') {
        dbRes = await collection.updateOne({
            clientId: body.id
        }, { $set: {
            clientId: body.id,
            data: body.data
        } }, { upsert: true });
    }
    
    return { dbRes }
})
