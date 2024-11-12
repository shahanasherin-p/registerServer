const users=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


exports.registerController=async(req,res)=>{
    console.log("Inside registerController")
    console.log(req.body)

    const {id,firstname,lastname,email,password,phoneNumber}=req.body
    const hashPassword=await bcrypt.hash(password,10)

    try{
        const exitingUsers=await users.findOne({email})
        if(exitingUsers){
            res.status(406).json("Existing User, please Login ")
        }else{
            const newUser=new users({id,firstname,lastname,email,password:hashPassword,phoneNumber})
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (err){
        res.status(401).json(err)
    }
}


exports.loginController=async(req,res)=>{
    console.log("Inside loginController")
    const {email,password}=req.body
    console.log(email,password)
    try{
        const exitingUsers=await users.findOne({email})
        if(exitingUsers){
            const checkPassword=await bcrypt.compare(password,exitingUsers.password)
            if(checkPassword){
                const token=jwt.sign({userId:exitingUsers._id},process.env.JWTPASSWORD)
                res.status(200).json({user:exitingUsers,token})
            }
            else{
                res.status(401).json("Incorrect Email or Password ") //for password
            }
          
        }else{
            res.status(404).json("Incorrect Email or Password ")
        }
    }
    catch (err){
        res.status(401).json(err)
    }
}

exports.allUserController = async(req,res)=>{
    console.log("inside allUserController");
    try{
        const allUsers = await users.find()
        res.status(200).json(allUsers)

    }catch(err){
        res.status(401).json(err)
    }
    
}


exports.oneUserController = async(req,res)=>{
    console.log("inside oneUserController");
    const{email} =req.body

    try{
        const user = await users.findOne({email})
        
        res.status(200).json({
            userId:user.id,
            firstName:user.firstname,
            lastName:user.lastname,
            email:user.email,
            phone:user.phone

        })
    }catch(err){
        res.status(401).json(err)
    }
    
}