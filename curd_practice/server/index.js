const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/Users.js');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.get("/",(req,res)=>{
    userModel.find({}).then((users)=>res.json(users)).catch((err)=>console.log(err))
})

app.get("/getUser/:id",(req,res)=>{
const id=req.params.id;
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

app.post("/createUsers",(req,res)=>{
userModel.create(req.body).then((users)=>{res.json(users)}).catch((err)=>{res.json(err)})
})

mongoose.connect("mongodb://ayyush227:curd1@ac-gf4a4ir-shard-00-00.uj3cqif.mongodb.net:27017,ac-gf4a4ir-shard-00-01.uj3cqif.mongodb.net:27017,ac-gf4a4ir-shard-00-02.uj3cqif.mongodb.net:27017/?replicaSet=atlas-rrbqrl-shard-0&ssl=true&authSource=admin")
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("error while connecting database:", err);
  });

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
