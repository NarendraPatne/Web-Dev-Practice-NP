// Parse Method to access json data JSON.parse()
let jsonRes='{"name":"John", "age":30, "car":"Rolls"}';
let jsonPsd=JSON.parse(jsonRes);
console.log(jsonRes);
// console.log(jsonRes.name);
console.log(jsonPsd.name);
console.log(jsonPsd.age);
console.log(jsonPsd.car);
// Parse JS Object into Json string
let ob={
    name:"a",
    age:11,
    adult:false
};
let job=JSON.stringify(ob);
console.log("---------------------------------");
console.log(ob);
console.log(job);