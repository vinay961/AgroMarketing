import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

import { User } from "../Model/user.model.js";
import { business } from "../Model/business.model.js";

const registerBusiness = asyncHandler(async(req,res)=>{
    const {businessName,businessCategory,businessLocation,contact,businessEmail} = req.body;
    if([businessCategory,businessEmail,businessLocation,businessName,contact].some((field)=> field?.trim() === '' )){
        throw new ApiError(404,"All fields are required!!")
    }
    const isBusinessExist = await business.findOne({
        $or:[{contact},{businessEmail}]
    })
    if(isBusinessExist){
        throw new ApiError(404,"Business with this email or contact number is already exist.")
    }
    const businessInfo = await business.create({
        businessName,
        businessCategory,
        businessLocation,
        contact,
        businessEmail
    })

    if(!businessInfo){
        throw new ApiError(400,"Something went wrong during registering business.")
    }
    res.status(201).json(201,businessInfo,"Business Registred sucessfully!!")
})

const editBusiness = asyncHandler(async(req,res)=>{
    
})

const getBusinessDetails = asyncHandler(async(req,res)=>{
    const businessDetail = await business.findOne({

    })
})

export {
    registerBusiness
}