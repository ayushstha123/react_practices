const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose");
const userModel = require("./models/Users.js");

const app=express();
app.use(express.json());
const PORT=3000
app.use(cors());

mongoose.connect("mongodb://ayyush227:curd1@ac-gf4a4ir-shard-00-00.uj3cqif.mongodb.net:27017,ac-gf4a4ir-shard-00-01.uj3cqif.mongodb.net:27017,ac-gf4a4ir-shard-00-02.uj3cqif.mongodb.net:27017/?replicaSet=atlas-rrbqrl-shard-0&ssl=true&authSource=admin")
.then(()=>console.log("mongoose Connected")).catch((err)=>{console.log(err)})

app.get("/",(req,res)=>{
    userModel.find({})
        .then((users)=>res.json(users))
        .catch((err)=>res.json(err))
})

app.post("/createUser",(req,res)=>{
    userModel.create(req.body)
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err))
})

app.get("/getUser/:id",(req,res)=>{
    const id =req.params.id;
    userModel.findById({_id:id})
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err))
})

app.put("/updateUser/:id",(req,res)=>{
    const id=req.params.id;
    userModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,phone:req.body.phone,age:req.body.age})
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err));
})

app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err))
})

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})