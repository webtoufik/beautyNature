import mongoose from "mongoose";


const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("Database connected");
    } catch (err) {
        console.error("Error to connect database");
    }
}

export default connectDB;
