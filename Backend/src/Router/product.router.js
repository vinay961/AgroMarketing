import {Router} from 'express'

import { upload } from '../Middleware/multer.js'
import { verifyJWT } from '../Middleware/checkAuth.js'

import { addProduct, deleteProduct, getProduct, getSpecificUserProduct } from '../Controller/product.controller.js'

const router = Router()

router.route('/addproduct').post(verifyJWT, upload.single("image"), addProduct)
router.route('/getproduct').get(getProduct)
router.route('/getuserproduct').get(verifyJWT,getSpecificUserProduct)
router.route('/deleteproduct').delete(verifyJWT,deleteProduct)


export default router