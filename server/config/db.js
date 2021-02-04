const mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/crud';

mongoose.connect(mongoDB, {useNewUrlParser: true, useFindAndModify: false , useUnifiedTopology: true,useCreateIndex:true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open',()=>{
     console.log("--------connected with Database-----------")
 })

 module.exports=mongoose

