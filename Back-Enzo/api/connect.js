// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const URL = process.env.URL_DATABASE;

const client = new MongoClient(URL);

export const db = client.db("singfy");


//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);

