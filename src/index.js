import express from "express";
import dbConnect from "./config/dbConfig.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT;
const startServer = () => {
  app.listen(PORT, async () => {
    await dbConnect();

    console.log(`The server started at ${PORT}`);
  });
};

startServer();
