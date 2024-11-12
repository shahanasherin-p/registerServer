const mongoose=require('mongoose')

const connectionString=process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("Mongodb atlas connected successfully")
}).catch(err=>{
    console.log("Mngodb connection failed")
    console.log(err)
})