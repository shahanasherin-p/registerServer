const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },   
    phoneNumber:{
        type:String,
        required:true,
        unique:true

    },
})

const users=mongoose.model("users",userSchema)
module.exports=users