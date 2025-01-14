// Requiring mongoose
const mongoose=require("mongoose");
// Connectiong mongoose with mongodb
main().then((res)=>{
    console.log("Connection Successful! ",res);
}).catch((err)=>{
     console.log(err);
});
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
// Defining schema for books collection
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String
    },
    price:{
        type:Number
    }
});
const Book=mongoose.model("Book",bookSchema);
let book1=new Book({
    // title:"Wings of Fire",
    author:"APJ Kalam",
    price:200
});
book1.save().then((res)=>{
    console.log(res);
    console.log("Data Saved!");
}).catch((err)=>{
    console.log(err);
});