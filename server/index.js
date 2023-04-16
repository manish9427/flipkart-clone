import express from "express";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Connection from "./database/db.js";
const app = express();
dotenv.config();
const PORT = 8000;
const USRERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USRERNAME, PASSWORD);
app.listen(PORT, () =>
  console.log(`server is running successfully on port ${PORT}`)
);
DefaultData();
