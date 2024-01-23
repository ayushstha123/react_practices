const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    phoneno:Number,
});

const userModel=mongoose.model("users",UserSchema)
module.exports=userModel; 