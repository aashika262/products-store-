import mongoose from "mongoose";

// this is done to connect with the databse
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); // 1 is exit with failure 0 is success
  }
};
export default connectDB; // export the function
