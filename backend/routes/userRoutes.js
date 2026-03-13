import express from 'express'
import { isAuth } from '../middleware/isAuth.js'
import { getAdmin, getCurrentUser } from '../controllers/userController.js'
import adminAuth from '../middleware/adminAuth.js'

let userRouter = express.Router()

userRouter.get('/currentUser', isAuth, getCurrentUser)
userRouter.get('/getAdmin', adminAuth, getAdmin)


export default userRouter