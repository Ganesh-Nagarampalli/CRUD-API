const express = require('express');
const app = express();

const mongoose = require('mongoose');



app.get('/', (req,res)=>{
    res.send("Hello Ganesh");
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