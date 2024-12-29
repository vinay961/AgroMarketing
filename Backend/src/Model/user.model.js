import mongoose,{Schema} from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"name is required."],
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required."],
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"password is required."]
    }
},{timestamps:true})


userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next
    }
    this.password = await bcrypt.hash(this.password,10);
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return bcrypt.compare(password,this.password)
}

export const User = mongoose.model("user",userSchema)