const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    age:Number,
})

const userModel=mongoose.model("users",UserSchema);
module.exports=userModel;