import mongoose,{model, Schema} from "mongoose";
import { User } from "./user.model.js";

const productSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name of product cann't empty."],
        trim:true,
        lowercase:true
    },
    category:{
        type:String,
        required:[true,"Please select the category."],
        trim:true
    },
    desc:{
        type:String,
        trim:true
    },
    price:{
        type:String,
        required:[true,"Price of product cann't be empty."]
    },
    quantity:{
        type:String,
        required:[true,"Quantity must be filled."]
    },
    image:{
        type:String,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

export const Product = mongoose.model("product",productSchema)