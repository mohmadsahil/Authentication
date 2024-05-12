import { Signup } from "../Models/User.js";

export const userSighUp = async(req,res)=>{
    const {name,email,password,repassword} = req.body;

    try {
        const userData = new Signup({name:name , email:email ,password:password , repassword:repassword})
        const saveData = await userData.save();
        return res.status(200).json(saveData);
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}