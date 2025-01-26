import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

import { User } from "../Model/user.model.js";


const generateAccessToken = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateToken()
        user.accessToken = accessToken
        await user.save({validateBeforeSave:false})
        return accessToken
    } catch (error) {
        throw new ApiError(401,"Error while generating token.")
    }
}

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
    const token = await generateAccessToken(existedUser._id)
    const loggedInUser = await User.findById(existedUser._id).select("-password")
    const options = {
        httpOnly:true,
        secure:true,
        sameSite:'None'
    }

    return res
        .status(201)
        .cookie("accessToken",token,options)
        .json(new ApiResponse(201,{loggedInUser},"Login successfull!!"))
})

const logout = asyncHandler(async(req,res) => {

})

const getUser = asyncHandler(async(req,res) => {

})

const changePassword = asyncHandler(async(req,res) => {

})

const editUser = asyncHandler(async(req,res) => {
    const userId = req.user?._id
    const user = await User.findById(userId)
    if(!user){
        throw new ApiError(404,"User not found!!")
    }

    const {name,email,phone} = req.body
    if(name){
        user.name = name;
    }
    if(email){
        user.email = email
    }
    await user.save({validateBeforeSave:false})

    res
       .status(201)
       .json(new ApiResponse(201,{},"Profile Updated Successfully"))
})

export {
    registerUser,
    login,
    editUser
}