import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error('Please define the MONGO_URI environment variable');
          }
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database connected")
    } catch (error) {
        console.error("Error connecting with database", error)
    }
}