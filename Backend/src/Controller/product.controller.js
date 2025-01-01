import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

import { User } from "../Model/user.model.js";
import { Product } from "../Model/product.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";

const addProduct = asyncHandler(async() => {
    const {name,category,desc,price,quantity,image} = req.body
    if([name,category,price,quantity].some((field) => field?.trim() == "")){
        throw new ApiError(400,"Some required input field is empty.")
    }
    const localFilePath = req.file?.path
    if(!localFilePath){
        throw new ApiError(400,"Image file/path is not founded.")
    }
    const productImage = await uploadOnCloudinary(localFilePath);
    const product = await Product.create({
        name,
        category,
        desc: desc ? desc:null,
        price,
        quantity,
        image:productImage?.url || null,
        user: req.user._id
    })

    res
        .status(201)
        .json(new ApiResponse(201,{product},"Product Registered."))
})

const editProduct = asyncHandler(async()=>{

})

const deleteProduct = asyncHandler(async()=>{
    
})

export {
    addProduct
}