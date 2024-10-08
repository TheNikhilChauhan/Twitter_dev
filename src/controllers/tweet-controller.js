import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully created a tweet",
    });
  } catch (error) {
    return res.status(500).json({
      success: flase,
      data: {},
      err: error,
      message: "Failed to create a tweet",
    });
  }
};
