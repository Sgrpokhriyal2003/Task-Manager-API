import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongodb connected: ${connect.connection.host}`);

    }
    catch(error){
        console.log("database connection failed", error.message);
        process.exit(1);
    }   
}