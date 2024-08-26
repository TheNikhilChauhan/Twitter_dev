import express from "express";
import dbConnect from "./config/dbConfig.js";
import dotenv from "dotenv";
dotenv.config();

import TweetService from "./services/tweet-service.js";
import HashtagRepository from "./repository/hashtag-repository.js";

const app = express();

const PORT = process.env.PORT;
const startServer = () => {
  app.listen(PORT, async () => {
    await dbConnect();

    console.log(`The server started at ${PORT}`);

    let hashtag = new HashtagRepository();
    await hashtag.bulkCreate([
      {
        title: "excited",
        tweet: [],
      },
      {
        title: "fun",
        tweet: [],
      },
      {
        title: "coding",
        tweet: [],
      },
    ]);
    let service = new TweetService();
    console.log(
      await service.create({
        content: "This is my first tweet #happy #excited #liveLife #coding",
      })
    );
  });
};

startServer();
