const mongoose=require('mongoose');
var Schema=mongoose.Schema;
var nameSchema=new Schema({
    firstName:String,
    lastName:String,
    city:String,
    state:String,
   

});
module.exports=mongoose.model("User",nameSchema);