const mongoose=require('mongoose');
var Schema=mongoose.Schema;
var crudSchema=new Schema({
    fullName:String,
    mobile:String,
    dob:String,
    jobType:String,
    emailId:String,
    jobType:String,
    prefLocation:String


});
module.exports=mongoose.model("CrudAngular",crudSchema);