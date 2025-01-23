import {Router} from 'express';
import { verifyJWT } from '../Middleware/checkAuth.js'
import { getBusinessDetails, registerBusiness } from '../Controller/business.controller.js';

const router = Router();

router.route('/registerbusiness').post(verifyJWT, registerBusiness);
router.route('/getbusinessdetail').get(verifyJWT, getBusinessDetails);


export default router;