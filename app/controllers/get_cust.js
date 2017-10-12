console.log("sam");
var bodyParser = require("body-parser");
var db1 = require("../models/db_setup");
//var db = require("./app/routes/index");
var mongoose = require("mongoose");
var Schema =  mongoose.Schema;
mongoose.Promise = global.Promise;mongoose.createConnection("mongodb://localhost:27017/node-demo");

var HealNow_Test = new Schema({
    name : {type : String},
    title : {type : String}
})


var User = mongoose.model('User', HealNow_Test);

module.exports = User;



module.exports = {
    get_user: function(req,resp){
        var get_user = req;
        console.log("1st step",get_user)
        db1.getusers(function(err,gener){
            if(err){
                throw err;
            }
            console.log('Inside ');
            resp.json(gener);

        });
    },

    post_user: function(req,resp){
        var new_data = new User(req.body);
        console.log("1st post",new_data.save())
        new_data.save()
        .then(function(err,res){
            console.log("in before err")
            if (err) {
            console.log("samerer", err)
            
            return resp.status(400).send("unable to save to database");
            }
            return resp.send("item saved to database");
            
            }).catch(function(er){
                console.log('ERRRRORRRR', er)
        })
        
           
        // db1.Addusers(User,function(err,User){
        //     if(err){
        //         throw err;
        //     }
        //     console.log('Inside ');
        //     resp.json(User);

        // });
    }
}


