import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

import { User } from "../Model/user.model.js";

const registerUser = asyncHandler(async(req,res) => {
    const { name,email,password } = req.body;
    if([name,email,password].some((field) => {field.trim() === ""})){
        throw new ApiError(404,"All fields are required.")
    }
    const existedUser = await User.findOne({
        $or : [{name},{email}]
    })
    if(existedUser){
        throw new ApiError(404,"User already exist.")
    }
    const user = await User.create({
        name,
        email,
        password
    })
    const createdUser = await User.findById(user._id).select("-password")
    if(!createdUser){
        throw new ApiError(404,"Something wrong!! Registration failed.")
    }

    return res
        .status(201)
        .json(new ApiResponse(201,createdUser,"Registration successfull."))
})


const login = asyncHandler(async(req,res) => {
    const {email,password} = req.body
    if([email,password].some((field) => {field.trim() === ""})){
        throw new ApiError(404,"All fields are required")
    }
    const existedUser = await User.findOne({email})
    if(!existedUser){
        throw new ApiError(404,"User doesn't exist")
    }
    const isPasswordCorrect = await existedUser.isPasswordCorrect(password)
    if(!isPasswordCorrect){
        throw new ApiError(404,"Incorrect Password")
    }

    res.status(201).json(new ApiResponse(201,{},"Login successfull!!"))
})