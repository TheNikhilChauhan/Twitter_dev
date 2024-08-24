import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const dbUri = process.env.MONGO_URI;
    console.log("Connecting to:", dbUri);
    await mongoose.connect(dbUri);
    console.log("The database is connected");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
};

export default dbConnect;
