// Requiring the mongoose to use it functionalities
const mongoose=require("mongoose");
// Calling the main fun which is async and returns the promise 
// It will execute then method if promise is fulfilled 
// Or execute catch if promise is rejected.
main().then((res)=>{
    console.log(res);
    console.log("Connection Successful!");
})
.catch(err => console.log(err));
// This method connects mongoose to mongodb with database written at the end.
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
// Creating the schema for mongoose model
// This schema is followed by collection 
// It defines the fields, their datatypes and other constraints and validations.
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:{
        type:Number,
        min:18
        },
    class:String
});
// Creating mongoose model which is class representing the Collection in a database.
// A document is the instance of Model class
// We pass Name of collection as first parameter and Schema for that collection as second parameter.
// Mongodb converts the collection name passed to model in lowercase plural form.
// mongoose.model('coll_name',schema) this returns the class definition that is liked to created collection and follows the schema passed to it.
const User=mongoose.model("User",userSchema);
const Employee=mongoose.model("Employee",userSchema);
// ------------------------------------------------------
// Creating the instances of the models to insert them to the collection
// const u1=new User({
//     name:"Utkarsh",
//     email:"utk@abc.com",
//     age:19
// });
// const e1=new Employee({
//     name:"Euuuu",
//     email:"euuu@rrrr.ccc",
//     age:32  
// });
// inserting the instances of the models to the collections using save() method
// u1.save();
// e1.save();
// User.insertMany([
//     {name:"a",email:"abc#aldfj",age:23},
//     {name:"B",email:"asdffas",age:34},
//     {name:"c",email:"adfa",age:45}
// ]).then((data)=>{
//     console.log("Multiple Documents inserted successfully at a time");
// });
// Returns all the documents which follow the filter
// User.find({age:{$gt:24}}).then((res)=>{
//     console.log(res)
//     console.log("------------------------------------------------");
// })
// .catch((err)=>console.log(err));
// User.findOne({name:"B"}).then((res)=>console.log(res))
// .catch((err)=>console.log(err));
// User.findById("677cec10d6b5ee2b405eec0e").then((res)=>{console.log(res)});
// Updating the document field.then((res)=>{console.})
// 1] updateOne()
// User.updateOne({name:"Utkarsh"},{age:25})
// .then((res)=>{console.log(res)});
// User.findOne({name:"Utkarsh"}).then((res)=>{console.log(res)
// });
// User.updateMany({name:"B"},{age:44}).then((res)=>{console.log(res)});
// Deleting using mongoose
// 1] deleteOne
// User.deleteOne({email:"adfa"}).then((res)=>{console.log(res)});
User.deleteMany({age:44}).then((res)=>{console.log(res)});