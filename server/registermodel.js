const mongoose=require('mongoose');
var Schema=mongoose.Schema;
var registerSchema=new Schema({
    fullName:String,
    email:String,
    password:String,


});
module.exports=mongoose.model("Register",registerSchema);