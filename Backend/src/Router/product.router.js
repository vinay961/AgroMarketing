import {Router} from 'express'

import { upload } from '../Middleware/multer.js'
import { verifyJWT } from '../Middleware/checkAuth.js'

import { addProduct,
     deleteProduct,
     editProduct,
     getProduct,
     getSpecificUserProduct } 
    from '../Controller/product.controller.js'

const router = Router()

router.route('/addproduct').post(verifyJWT, upload.single("image"), addProduct)
router.route('/getproducts').get(getProduct)
router.route('/getuserproduct').get(verifyJWT,getSpecificUserProduct)
router.route('/deleteproduct/:id').delete(verifyJWT,deleteProduct)
router.route('/updateproduct/:id').put(verifyJWT,editProduct)


export default router