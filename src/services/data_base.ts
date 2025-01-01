import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

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

    async updateItem(){}

}

const db = new DataBase()

export default db;