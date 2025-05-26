import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://fernandocpeng:GyM1bBYSsZzTlXqK@cluster0.gg7cjob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL);
// const client = new MongoClient(URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

export const db = client.db("spotifyAula");
// const songsCollection = await db.collection("songs").find({}).toArray();
// console.log(songsCollection);
// const artistsCollection = await db.collection("artists").find({}).toArray();
// console.log(artistsCollection);
