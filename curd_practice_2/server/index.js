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
    userModel.create(req.body).then((users)=>res.json(users))
    .catch((err)=>res.json(err))
})

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})