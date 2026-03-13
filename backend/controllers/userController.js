import User from "../models/userModel.js"


export const getCurrentUser = async(req, res)=>{
    try {
        let id = req.userId
        let user = await User.findById(id).select("-password")
        if(!user){
            return res.status(404).json({message:"user doesn't found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message : "getCurrentUser error"})
    }
}

export const getAdmin = async(req, res) =>{
    try {
        let adminEmail = req.adminEmail
        if(!adminEmail){
            return res.status(404).json({message:"Admin doesn't found"})
        }
        return res.status(201).json({
            email:adminEmail,
            role:"admin"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : "getAdmin error"})
    }
}