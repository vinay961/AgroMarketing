import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

import { User } from "../Model/user.model.js";
import { Product } from "../Model/product.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";

const addProduct = asyncHandler(async(req,res) => {
    const {name,category,desc,price,quantity} = req.body
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

const getProduct = asyncHandler(async(req,res) =>{
    const products = await Product.find()
    res.status(201).json(new ApiResponse(201,products,"Products fetched Succesfully."))
})

const getSpecificUserProduct = asyncHandler(async(req,res) => {
    const userId = req.user?._id
    const products = await Product.find({ user:userId })
    if(!products){
        throw new ApiError(404,"No Product is find for this user.")
    }
    res.status(201).json(new ApiResponse(201,products,"Products Fetched Sucessfully."))
})

const editProduct = asyncHandler(async()=>{

})

const deleteProduct = asyncHandler(async()=>{
    const productId = req.params.id
    if(!productId){
        throw new ApiError(404,"Product Id not found.");
    }
    await Product.findByIdAndDelete(productId)
    res
        .status(201)
        .json(new ApiResponse(201,{},"Product Successfully deleted."))
})

export {
    addProduct,
    getProduct,
    getSpecificUserProduct,
    deleteProduct
}