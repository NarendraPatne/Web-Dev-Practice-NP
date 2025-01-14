// let arg=process.argv;
// // arg[0] arg[1] is not getting prinited works fine from arg[2]
// console.log(arg[0])
// console.log(arg[1])
// for(let i=2;i<arg.length;i++)
// {
//     console.log("Hello! ",arg[i]);
// }
// let data=require('./Fruit');
// console.log(data);
const figlet=require("figlet");
figlet("Narendra", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });