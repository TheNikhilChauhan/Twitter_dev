import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepo = new TweetRepository();
    this.hashtagRepo = new HashtagRepository();
  }

  async create(data) {
    try {
      const content = data.content;
      const tags = content.match(/#[a-zA-Z0-9_]+/g);

      let updatedTags = tags.map((tag) => tag.substring(1).toLowerCase());

      //creating tweet
      const tweet = await this.tweetRepo.create(data);

      //tag
      let alreadyPresentTags = await this.hashtagRepo.findByName(updatedTags);
      let titleOfPresentTag = alreadyPresentTags.map((tag) => tag.title);
      let newTags = updatedTags.filter(
        (tag) => !titleOfPresentTag.includes(tag)
      );
      newTags = newTags.map((tag) => {
        return { title: tag, tweets: [tweet.id] };
      });

      await this.hashtagRepo.bulkCreate(newTags);

      //extracting tweet id for already present tag and pushing it to tweets array
      alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
      });

      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default TweetService;
