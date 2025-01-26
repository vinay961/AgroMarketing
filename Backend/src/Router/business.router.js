import {Router} from 'express';
import { verifyJWT } from '../Middleware/checkAuth.js'
import { editBusiness, getBusinessDetails, registerBusiness } from '../Controller/business.controller.js';

const router = Router();

router.route('/registerbusiness').post(verifyJWT, registerBusiness);
router.route('/getbusinessdetail').get(verifyJWT, getBusinessDetails);
router.route('/editbusinessdetail').put(verifyJWT, editBusiness)


export default router;