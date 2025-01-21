import {Router} from 'express';
import { registerBusiness } from '../Controller/business.controller.js';

const router = Router();

router.route('/registerbusiness').post(registerBusiness);


export default router;