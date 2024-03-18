import mongoose from "mongoose";

export const connectDB = async () => {
  
  try {
    console.log("ssss");
    console.log(process.env.MONGO_URL);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connect: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`${error.message}`.red,"yugjh");
    process.exit();
  }
};
