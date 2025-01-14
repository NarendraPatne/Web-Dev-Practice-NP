const express=require('express');
const app=express();
// console.dir(app);
let port=8080;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});
// app.use method listens all the requests even for different routes
// app.use((req,res)=>{
//     // console.log(req);
//     console.log("Request Received");
//     // res.send("This is response.")
//     let code="<h1>Fruits</h1><ul><li>apple</li><li>orange</li><li>banana</li></ul>";
//     res.send(code);
// });
// Root path
app.get("/",(req,res)=>{
    res.send("Root path Get Request");
});
// Different Routes
app.get("/fruits",(req,res)=>{
    let code="<h1>Fruits</h1><ul><li>apple</li><li>orange</li><li>banana</li></ul>";
    res.send(code);
    console.log("get request received");
});
app.get("/home",(req,res)=>{
    res.send("Home route response");
    console.log("get request received");
});
app.get("/hello",(req,res)=>{
    res.send("Hello! World");
    console.log("get request received");
});
app.post("/",(req,res)=>{
    res.send("You sent post request to root.");
    console.log("post request received");
});
// Path parameter (Dynamic part of url): using path parameters
app.get("/path/:username/:city",(req,res)=>{
    console.log(req.params)
    let code=`<h1>Hello! ${req.params.username}, you live in ${req.params.city}.</h1>`;
    res.send(code);
    console.log("Path parameter received.")
})
app.get("/search",(req,res)=>{
    console.log(req.query);
    const query=req.query.query;
    const size=req.query.size;
    res.send(`Searching! for ${query} of size ${size}`);
})
// This will called if any unmatched route received
// app.get("*",(req,res)=>{
//     res.send("This path doesnt exist.");
//     console.log("get request received");
// });

