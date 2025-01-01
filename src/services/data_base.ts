import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import { Filter, User } from "../infrastructure/interfaces"

dotenv.config();

const dataBase = process.env.DB_NAME;
const uri = process.env.DB_URL;

if (!dataBase || !uri) {
    throw new Error("Environment variables DB_NAME and DB_URL are required.");
}

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

client.connect()


class DataBase {
    constructor() { }

    async connect() {
        await client.connect();
    }

    async disconnect() {
        await client.close();
    }

    async getAllItems(collectionName: string) {
        const database = client.db(dataBase);
        const collection = database.collection(collectionName);
        const items = await collection.find().toArray();
        return items;
    }

    async getFilteredItems(collectionName: string, filter: Filter) {
        const database = client.db(dataBase);
        const collection = database.collection(collectionName);
        const items = await collection.find(filter).toArray();
        return items;
    }

    async addItem(collectionName: string, item: Filter) {
        const database = client.db(dataBase);
        const collection = database.collection(collectionName);
        const result = await collection.insertOne(item);
        return result;
    }

    async deleteItem(collectionName: string, filter: Filter) {
        const database = client.db(dataBase);
        const collection = database.collection(collectionName);
        const result = await collection.deleteOne(filter);
        return result;
    }

    async updateItem(collectionName: string, filter: Filter, update: User) {
        const database = client.db(dataBase);
        const collection = database.collection(collectionName);
        const result = await collection.updateOne(filter, { $set: update });
        return result;
    }

}

const db = new DataBase()

export default db;