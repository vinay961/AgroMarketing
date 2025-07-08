import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

import jwt from "jsonwebtoken";
import { User } from "../Model/user.model.js";

export const verifyJWT = asyncHandler(async(req,res,next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
    if(!token){
        throw new ApiError(400 , "Unauthorized request")
    }

    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET) // basically return payload
    const user = await User.findById(decodedToken?._id).select("-password")
    if(!user){
        throw new ApiError(401, "Invalid Access Token")
    }
    req.user = user;
    next();
})