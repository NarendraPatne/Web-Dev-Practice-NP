// to use express we require it
const express=require("express");
// create server application
const app=express();
// port for server on localhost
const port=8080;
// we require the path for path of server file
const path=require("path");
// For using UUID package for creating ids for the posts
const { v4: uuidv4 } = require('uuid');
// below function returns the unique string id
// uuidv4();
// Requiring method override pkg for converting the post request from form to patch
// As forn cant send patch request and we have to make patch request from form.
const methodOverride=require("method-override");
// -------------------------------------------------------
// using method override to convert http req to _method valued method
app.use(methodOverride("_method"));
// used to parse url encoded data in express readable form.
app.use(express.urlencoded({extended:true}));
// setting view engine to ejs
app.set("view engine","ejs");
// setting views template files folder path
app.set("views",path.join(__dirname,"views"));
// using static files public folder path.
app.use(express.static(path.join(__dirname,"/public")));
// ------------------------------------------------------------------------------
let posts=[
    {
        id:uuidv4(),
        username:"akbar",
        content:"Darbar! Shuru kiya jaaye."
    },
    {
        id:uuidv4(),
        username:"birbal",
        content:"Maharaj toufa qubool karo."
    },
    {
        id:uuidv4(),
        username:"taansen",
        content:"adaaaaaaaaaauuuuuuuuu sssssuosuosu sodfjoasdjd adfifij nikalllllllllll"
    }
]
// Create Route to create new post
// 1] Route to view create post page
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
// 2] Route for handling the post request to create new post
app.post("/posts",(req,res)=>{
    let ob={
        id:uuidv4(),
        username:req.body.username,
        content:req.body.content
    };
    posts.push(ob);
    console.log(ob);
    // redirect() method redirects directly to the passed route
    // it sends get request by default.
    res.redirect("/posts");
})
// READ Route to read all the posts
app.get("/posts",(req,res)=>{
   res.render("index.ejs",{posts});
});
// Read specific post using its id
app.get("/posts/:id",(req,res)=>{
    let ob=req.params;
    // console.log(ob.id);
    let post=posts.find((p)=>ob.id===p.id);
    // console.log(post);
    res.render("showpost.ejs",{post});
    // res.send(`Your request for post is received id is: ${ob.id}`);
});
// patch req to edit the post content and render all the changes posts
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    console.log(newContent);
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    // res.send("Patch request sent successfully.");
    res.redirect("/posts");
});
// Get req to render edit post page
app.get("/posts/:id/edit",(req,res)=>{
    let ob=req.params;
    let post=posts.find((p)=>ob.id===p.id);
    res.render("edit.ejs",{post});
})
app.delete("/posts/:id",(req,res)=>{
    let ob=req.params;
    posts=posts.filter((p)=>p.id!==ob.id);
    res.redirect("/posts");
});
// ------------------------------------------------------------------------------
// starting the server
app.listen(port,()=>{
    console.log("Server Started.");
})