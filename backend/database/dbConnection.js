import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.log("Error connecting to the database", error);
    });
};
