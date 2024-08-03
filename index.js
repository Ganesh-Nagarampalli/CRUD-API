const express = require('express');
const mongoose = require('mongoose');
const userDetails = require('./models/userDetails.model.js')
const app = express();

app.use(express.json());



app.get('/', (req,res)=>{
    res.send("Hello Ganesh");
});

app.get('/api/users', async(req,res) =>{
    try{
        const users = await userDetails.find({});
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

app.post('/api/users', async (req,res) =>{
    // console.log(req.body);
    // res.send(req.body);
    // lets use mongodb to store

    try{
        const user = await userDetails.create(req.body);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

// update

app.put('/api/user/:username', async (req,res) =>{
    try{
        const {username} = req.params;
        const updateData = req.body;
        const user = await userDetails.findOneAndUpdate(
            {username:username}, updateData, {new:true}
        );
        if(!user){
            return res.status(404).json({message:"user not found"});
        }

        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

// delete

app.delete('/api/user/delete/:username', async(req,res) =>{
 try{
    const {username} = req.params;
    await userDetails.findOneAndDelete(username);
    res.status(200).json({message:"user deleted"});

 }
 catch(error){
    res.status(500).json({message:error.message});
 }
});

mongoose.connect("mongodb+srv://ganeshnagarampalli:4tzWF9nYTeynEXHn@backenddb.1uovhjd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDb")
.then(() =>{
    console.log("connected to database");
    app.listen(3000, ()=>{
        console.log("server running on port 3000")
    });
})
.catch(() =>{
    console.log("connection failed")
});