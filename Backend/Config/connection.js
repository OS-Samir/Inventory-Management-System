const mongoose = require('mongoose')
const connectionDB=async()=>{
   await mongoose.connect(process.env.DB_URI).then(()=>{
       console.log("Database connected successfully");
}).catch((error)=>{
    console.log("error in db connection !",error)
})

}
module.exports=connectionDB;