const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect('mongodb+srv://shivam:sksthakur@cluster0.r9cvxfe.mongodb.net/RIDO', 
    {  
        useUnifiedTopology: true,
        useNewUrlParser: true

    })

    const connection = mongoose.connection

    connection.on('connected', () =>{
        console.log("Connection Successfull")
    })

    connection.on('error', () =>{
        console.log("Connection error")
    })
}

connectDB ()

module.exports = mongoose