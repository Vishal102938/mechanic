import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import serviceRouter from "./routes/serviceRoutes.js";
import contactRouter from "./routes/contactRoutes.js";
import cors from 'cors'

dotenv.config()
let port = process.env.PORT || 6000

let app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:["https://mechanic-user.onrender.com","http://localhost:5174"],
    credentials:true
}))

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/service", serviceRouter);
app.use("/api/contact", contactRouter);

connectDb()
app.listen(port, ()=>{
    console.log("Server run on 8000...")
    
})
