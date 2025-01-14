// Requiring express to use it
const express=require("express");
// creating server application
const app=express();
// Port to listen the requests.
let port =8080;
// we set the path for views directory and static files explicitly.
const path=require("path");
// Set public as folder for storing the static files (.css, .js , etc).
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
// We set view engine to ejs
// Its not required to require ejs because express requires ejs automatically
app.set("view engine","ejs");
// Below 2 lines used for setting path for views folder explicitly
// Because Express searches for the views directory in the directory from where the server is started
// and if server is not started from its parent directory then it giver error 
// to solve this error because of default / implicit path selection of views by express
app.set("views",path.join(__dirname,"views"));
app.get("/",(req,res)=>{
    // res.send("This is root.");
    // Using res.render method express renders ejs file and sends to client as response 
    res.render("home.ejs");
});
app.get("/hello",(req,res)=>{
    res.send("Hello!");
});
app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceval});
});
app.get("/objres",(req,res)=>{
    const ob={
        title:`${req.query.title}`,
        name:`${req.query.name}`,
        age:`${req.query.age}`
    };
    console.log(req.params)
    res.render("obre.ejs",ob);
});
app.get("/ig/:username",(req,res)=>{  
    let u={
        user:req.params.username,
        followers:["a","b","c","d"]
    };
    res.render("insta.ejs",u);
});
app.get("/insta/:username",(req,res)=>{
    let user=req.params.username;
    console.log(user)
    const idata=require("./data.json");
    console.log(idata);
    const d=idata[user]
    if(d)
    {
        res.render("instagram.ejs",{data:d});
    }else{
        res.render("err.ejs");
    }
});
app.listen(port,(req,res)=>{
    console.log(`Server listening on port ${port}`);
});