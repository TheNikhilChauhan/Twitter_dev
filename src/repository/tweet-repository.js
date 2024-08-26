import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      throw error;
    }
  }

  async find(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default TweetRepository;
