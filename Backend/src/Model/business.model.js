import mongoose,{Schema} from "mongoose";
import { User } from "./user.model.js";

const businessDetails = new Schema({
    businessName:{
        type:String,
        trim:true,
        required:[true,"Business Name cann't be empty!"]
    },
    businessCategory:{
        type:String,
        trim:true,
        required:[true,"Bussiness Category is required."]
    },
    businessLocation:{
        type:String,
        required:[true,"Location is mendatory"]
    },
    contact:{
        type:String,
        required:[true,"Contact Number is required."]
    },
    businessEmail:{
        type:String,
        trim:true,
        required:[true,"Business Email is mandatory."]
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const business = mongoose.model("businessDetails",businessDetails)