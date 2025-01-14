// Requiring the faker package used to generate the fake data.
const { faker, da } = require('@faker-js/faker');
const mysql = require('mysql2');
// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_main',
    password:'student'
  });
  // -------------------------------------------------------------------
  // Inserting new data in database
  // We are writing the queries in js var in dynamic format
  // In this we can write the placeholders (?) whose values are dynamic;
  // let query="INSERT INTO USER (id,username,email,password) VALUES ?;";
  // let users=[
  //   ["1234","newusesr1","abc@gmail2.com","adgaggdsa3"],
  //   ["1235","newusesr2","abc@gmail3.com","adgaggdsa4"]
  // ];
  // try{
  //   connection.query(query,[users],(err,result)=>{
  //       if(err)
  //       {
  //           throw err;
  //       }
  //       console.log(result);
  //       // console.log(result.length);
  //     });
  // }catch(err)
  // {
  //   console.log("Error in sql query execution:",err);
  // }
  // -------------------------------------------------------------------
// We can generate fake data using faker using following functions..
// let createUser= function createRandomUser() {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.username(), // before version 9.1.0, use userName()
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
//   }
// Returning the array of values for one record.
let createUser= function() {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password()
    ];
  }
//   createRandomUser();
//   console.log(createUser());
// -----------------------------------------------------------------
// Inserting the records of 100 users created by faker in mysql
let data=[];
for(let i=1;i<=100;i++)
{
// console.log(createUser());
  data.push(createUser());
}
let q="INSERT INTO USER (ID,USERNAME,EMAIL,PASSWORD) VALUES ?";
connection.query(q,[data],(error,result)=>{
  if(error)
    throw error;
  console.log(result);
});
