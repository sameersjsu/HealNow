// var mongoose = require("mongoose");
// var Schema =  mongoose.Schema;

// var HealNow_Test = new Schema({
//     name : {type : String},
//     title : {type : String}
// },{collection:'bhanu'});

// var User = mongoose.model('User', HealNow_Test);

// module.exports = User;

// module.exports.getusers = function(callback,limit){
//     console.log('Before find and inside schema ');
//     User.bhanu.find({title:'sex'},function(err,doc){
//         if(err){

//         }
//         else{

//         }
//     });
// }
// module.exports.Addusers = function(body_data,callback){

    
//     var items ={
//         name:body_data.name,
//         title:body_data.title
//     }
//     var obj_user = new User(items);
//     console.log(' Before post ',obj_user);
//     console.log(' callback post ',callback);
//     obj_user.save(callback);
// }