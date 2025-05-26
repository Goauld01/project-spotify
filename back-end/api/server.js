import express from "express";
import cors from "cors";
import { db } from "./conect.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World! Tudo certo?");
});
app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});
app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
