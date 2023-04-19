import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@flipkart.u7vzx2n.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL);
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error while Connecting with the database", error.message);
  }
};
export default Connection;
