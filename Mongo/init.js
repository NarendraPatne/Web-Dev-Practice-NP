// This file is created for initialization of the database 
// We create our basic database structure and enter some sample data
// We will run this file only once
const mongoose=require("mongoose");
main().then(()=>{
    console.log("Connected to Mongodb.");
}).catch((err)=>console.log(err));
async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
const chatSchema=new mongoose.Schema({
from:{
    type:String,
    required:true
},
to:{
    type:String,
    required:true
},
msg:{
    type:String,
    maxLength:50
},
created_at:{
   type:Date,
   required:true
}
});
const Chat=mongoose.model("Chat",chatSchema);
const allchats=[
    {
    from:"NP",
    to:"RP",
    msg:"Hello! Bro.",
    created_at:new Date()
    },
    {
        from:"RP",
        to:"NP",
        msg:"Hey.",
        created_at:new Date()
    },
    {
        from:"NP",
        to:"NK",
        msg:"Yo whatsypp!.",
        created_at:new Date()
    },
    {
        from:"NK",
        to:"NP",
        msg:"Malum hai naa!.",
        created_at:new Date()
    }
];
Chat.insertMany(allchats).then(()=>console.log("All the data inserted in Chat cllection"));