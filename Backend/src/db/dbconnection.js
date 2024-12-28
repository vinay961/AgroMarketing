import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config(); // load the env content in process.env by default

const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {dbName:process.env.DB_NAME});
        console.log(`\n MongoDB connected !! DB HOST: ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        console.log('DB connection failed.');
        process.exit(1);
    }
}

export default connectDB

