import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI as string);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected");
    });
    connection.on("error", (err) => {
      console.log(
        "mongodb conection error,Please make sure db is up and running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong while connection with DB");
    console.log(error);
  }
}
