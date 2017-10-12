
//packages required 
var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");
// var DBConnection = 'localhost:27017/HealNowTest';
mongoose.Promise = global.Promise;mongoose.createConnection("mongodb://localhost:27017/node-demo");
// var HealNowTest = require(".app/models/db_setup.js");
var routes = require("./app/routes/index");
// var mong_db = mongoose.createConnection(DBConnection,(err,db) => {
//     if (err){
//         return console.log('DB connect not set up');
//     }
//     console.log('Connection successfu');

// });



// Configure the express middleware to use the body parser required for post calls 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 7000;

//Define Routes for for Rest calls 
var router = express.Router();


router.get("/",function(req,res) {
    
});
router.post("/inser",function(req,res){

});



routes.registerRoutes(app);


//Start the server
app.listen(port);
console.log("port num",port); 

