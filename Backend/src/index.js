import { app } from "./app.js";
import connectDB from "./db/dbconnection.js";
import dotenv from 'dotenv'

dotenv.config()

connectDB()
    .then(()=> {
        app.listen(process.env.PORT || 3000, ()=>{
            console.log(`Server is running on PORT: ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("Database connection failed");
    })