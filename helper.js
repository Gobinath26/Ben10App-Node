import { client } from "./index.js";
import { ObjectId } from "mongodb";

export async function getAlienById(id) {
  console.log(id, ObjectId(id));
  return await client
    .db("b30wd")
    .collection("aliens")
    .findOne({ _id: ObjectId(id) });
}
export async function createAliens(data) {
  return await client.db("b30wd").collection("aliens").insertMany(data);
}
export async function createUser(data) {
  return await client.db("b30wd").collection("users").insertOne(data);
}
export async function getUserByName(username) {
  return await client
    .db("b30wd")
    .collection("users")
    .findOne({ username: username });
}
export async function deleteAlienById(id) {
  return await client
    .db("b30wd")
    .collection("aliens")
    .deleteOne({ _id: ObjectId(id) });
}
export async function getAllAliens() {
  return await client.db("b30wd").collection("aliens").find({}).toArray();
}
export async function updateAlienById(id, updateData) {
  return await client
    .db("b30wd")
    .collection("aliens")
    .updateOne({ _id: ObjectId(id) }, { $set: updateData });
}

//these allare called db commands
