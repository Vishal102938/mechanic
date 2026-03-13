import express from 'express'
import { adminLogin, googleLogin, Login, LogOut, Registration } from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/registration',Registration)
authRouter.post('/login',Login)
authRouter.get('/logout', LogOut)
authRouter.post('/google', googleLogin)
authRouter.post('/adminlogin', adminLogin)

export default authRouter