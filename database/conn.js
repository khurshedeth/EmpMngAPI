const MONGO_URI =
  "mongodb+srv://mongo:9WDPnxjAyMIydTCs@nextcruddb.7d9urkv.mongodb.net/?retryWrites=true&w=majority";
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log("Connected to the database");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
