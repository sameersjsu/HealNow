function data_manulation(){}

data_manulation.getall = function (db,cb){

    return  db.bhanu.find(cb);
}

module.exports= {
    data_manulation : new data_manulation()
}
