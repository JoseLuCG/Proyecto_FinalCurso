import { MongoClient, ObjectId } from "mongodb";
import { config } from "dotenv"

if ( process.env.NODE_ENV != "production" ) {
    config()
}
//----------Create a instance of mongodb.----------
const client = new MongoClient(process.env.MONGO_URL);

//----------Conection with database----------
client.connect();
const database = client.db("SocialNetwork");
export const users = database.collection("users");