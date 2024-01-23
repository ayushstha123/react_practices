const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    phone:Number,
});

const userModel=mongoose.model("users",UserSchema)
module.exports=userModel; 