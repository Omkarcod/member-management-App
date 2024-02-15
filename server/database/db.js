import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@userdata.tmujyre.mongodb.net/?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL);
    console.log("database connected successfully");
  } catch (e) {
    console.log("error while connecting database", e);
  }
};
export default Connection;
