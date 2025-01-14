const express=require("express");
const app=express();
let port=8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/register",(req,res)=>{
    const data=req.query
     res.send(`Response for GET Request to User: ${data.user}`);
});
app.post("/register",(req,res)=>{
    let rdata=req.body;
    console.log("Post req received");
    res.send(`Response for POST Request to user: ${rdata.user}`);
});
app.listen(port,()=>{
    console.log(`Server is listening on Port No: ${port}`);
});