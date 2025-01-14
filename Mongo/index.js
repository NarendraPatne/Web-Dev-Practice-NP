const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");
// ---------------------------------------------------------
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
});
async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
// ---------------------------------------------------------
// Index Route
app.get("/chats",async (req,res)=>{
    const chats=await Chat.find();
    res.render("index.ejs",{chats});
});
// New chat route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
// New chat post method to create chat in database.
app.post("/chats/new",(req,res)=>{
    let ob=req.body;
    let chat=new Chat({
        from:ob.from,
        msg:ob.msg,
        to:ob.to,
        created_at:new Date()
    });
    // res.send(chat);
    chat.save().then((result)=>{
        console.log("Chat Created!");
        console.log(result);
        res.redirect("/chats");
    }).catch((err)=>{
        console.log(err);
    });
});
// Edit chat page render get route
app.get("/chats/:id/edit",async(req,res)=>{
    let id=req.params.id;
    let chat=await Chat.findById(id);
    console.log(chat);
    res.render("edit.ejs",{chat});
});
// Updating the msg in db 
app.put("/chats/:id",async (req,res)=>{
    let id=req.params.id;
    let newMsg=req.body.msg;
    let updChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true});
    console.log(updChat);
    res.redirect("/chats");
})
// deleting the chat
app.delete("/chats/:id",async (req,res)=>{
    let id=req.params.id;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})
// Root Route
app.get("/",(req,res)=>{
    res.send("Get request received at root route.");
});
// ---------------------------------------------------------
app.listen(port,()=>{
    console.log("Server Started!");
});