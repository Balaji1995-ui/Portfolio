// const { json } = require("express");
const express= require("express");
const app = express();
const cors = require("cors")
const mysql = require("mysql");
app.use(cors());
app.use(express.json());
app.post("/", (req,res)=>{

const{Name:Name, Email:Email,Message:Message,Subject:Subject}= req.body;
console.log(req.body);
db.query("Insert into register set ?",{Name,Email,Message,Subject},
(err,result)=>{
    if (err) {
       res.send({err:err});
    }
    if(!result){
        res.send(result);
    }else{
        res.send({ message:"Enter Vaild Details"})
    }
})

//    res.send("Hi welcome back")
});
app.listen(5000, ()=>{
    console.log("server started @ 5000..!!");
})
const db= mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"visual"
})
db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Mysql server connected");
    }
});