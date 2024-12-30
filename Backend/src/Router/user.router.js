import {Router} from 'express'
import { editUser, login, registerUser } from '../Controller/user.controller.js'
import { verifyJWT } from '../Middleware/checkAuth.js'


const router = Router()

router.route('/register').post(registerUser)
router.route('/login').post(login)
router.route('/edituser').put(verifyJWT, editUser)


export default router