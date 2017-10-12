var router = require('express').Router();
var get_cust =require("../controllers/get_cust");
var db_set = require("../models/db_setup");

router.get("/test",get_cust.get_user);
router.post("/testpost",get_cust.post_user);

router.get("/test1",function(req,res){
    res.json({'name':'bhanu'});
});

router.get("/testApi", function(req,res){
    db_set.getusers(function(err,gener){
        if(err){
            throw err;
        }
        res.json(gener);

    });
});

module.exports = router;



