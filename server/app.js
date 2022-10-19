const express=require('express');
const PORT=3000;
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/node-demo").then(()=>
console.log("Db connected")).catch(err=>console.log("error"))

var User = require('./model')
var CrudAngular = require('./crudangularmodel')
var Register = require('./registermodel')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

/////register document/////
app.post('/register',(req,res)=>{
    var fullName=req.body.fullName;
    var email=req.body.email;
    var password=req.body.password;
    var register=new Register(req.body);
    register.fullName=fullName,
    register.email=email,
    register.password=password,
    console.log(req.body);
    register.save()   
    .then(item=>{
        res.status(200).send(item)
        
    })
    .catch(err=>{
        res.status(400).send("There is an error in adding User in DB");
    })
})

app.post('/cruds', (req,res)=>{

    var myData=new User(req.body);
    console.log(req.body);
    myData.save()
    .then(item=>{
        res.status(200).send(item)
        
    })
    .catch(err=>{
        res.status(400).send("unable to save")
    })
    });
    
app.get('/getcrud',async(req,res)=>{
    try{
const allData=await User.find();
return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }
});

app.get('/getcrud/:id',async(req,res)=>{
    try{
const allData=await User.findById(req.params.id);
return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }
});
app.delete('/deletecrud/:id',async(req,res)=>{
    try{
await User.findByIdAndDelete(req.params.id);
return res.send(await User.find());
    }
    catch(err){
        console.log(err.message);
    }
});
app.post('/addData', (req,res)=>{

    var myData=new CrudAngular(req.body);
    console.log(req.body);
    myData.save()
    .then(item=>{
        res.status(200).send(item)
        
    })
    .catch(err=>{
        res.status(400).send("unable to save")
    })
    });
    app.get('/getData',async(req,res)=>{
        var data=await CrudAngular.find();
        res.json(data)
    });
    app.delete('/deletedata/:id',async(req,res)=>{
        try{
    await CrudAngular.findByIdAndDelete(req.params.id);
    return res.send(await CrudAngular.find());
        }
        catch(err){
            console.log(err.message);
        }
    });
    

    
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
})

