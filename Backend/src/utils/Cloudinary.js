import dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath) return null
    
        const response = await cloudinary.uploader.upload(localFilePath, {resource_type:"auto"})
        console.log("File uploaded on cloudinary:", response.url);
    
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlink(localFilePath, (err) => {
            if (err) console.error("Failed to remove file:", err);
        });
        console.error("Cloudinary upload failed:", error);
        return null;
    }
}

export {uploadOnCloudinary}