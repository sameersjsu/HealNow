var test_cust = require("./test_cust.js");
module.exports=  {

registerRoutes : function(app) {
    app.use("/api",test_cust)
}
}
// registerRoutes: funtion(app) {
         


