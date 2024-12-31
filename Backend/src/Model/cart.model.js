import mongoose,{Schema} from 'mongoose'
import { User } from './user.model.js'
import { Product } from './product.model.js'

const cartSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    cartItems:[
        {
            productId:{
                type:Schema.Types.ObjectId,
                ref:"Product"
            },
            quantity:{
                type:String,
                require:true,
                default:1
            }
        }
    ]
})

export const Cart = mongoose.model("cart",cartSchema)