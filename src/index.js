import express from "express";
import bodyParser from "body-parser";
import dbConnect from "./config/dbConfig.js";
import dotenv from "dotenv";
dotenv.config();

import ApiRoutes from "./routes/index.js";

const startServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);

  const PORT = process.env.PORT;
  app.listen(PORT, async () => {
    await dbConnect();

    console.log(`The server started at ${PORT}`);
  });
};

startServer();
