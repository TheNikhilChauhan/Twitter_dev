import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  onModel: {
    type: String,
    required: true,
    enum: ["Comment", "Tweet"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "onModel",
  },
});

const Like = mongoose.model("Like", likeSchema);
export default Like;
