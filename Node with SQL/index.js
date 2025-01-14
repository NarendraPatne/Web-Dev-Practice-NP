const express=require("express");
const app=express();
const port=8080;
const mysql=require("mysql2");
const path=require("path");
const methodOverride=require("method-override");
// ---------------------------------------------------------
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
// ---------------------------------------------------------
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"delta_main",
    password:"student"
});
// Home Route
app.get("/",(req,res)=>{
    let q="SELECT COUNT(*) FROM USER;";
   try{
    connection.query(q,(error,result)=>{
        if(error)
            throw error;
        let c=result[0]["COUNT(*)"]
        console.log(c);
      res.render("home.ejs",{c});
    });
   }catch(error)
   {
    console.log("Error occurred during execution of query:",error);
    res.send(error);
   }
    // res.send("Welcome!!");
});
// Show users route
app.get("/user",(req,res)=>{
    let q="SELECT * FROM USER;";
    try{
        connection.query(q,(error,result)=>{
            if(error)
                throw error;
            // console.log(result);
            res.render("showusers.ejs",{result});
        })
    }catch(err)
    {
        console.log(err);
    }
});
// EDIT ROUTE
app.get("/user/:id/edit",(req,res)=>{
    let id=req.params.id;
    let q=`SELECT * FROM USER WHERE id="${id}";`;
    try{
        connection.query(q,(error,result)=>{
        if(error) throw error;
        let user=result[0];
        res.render("edit.ejs",{user});
        })
    }catch(err)
    {
        console.log(err);
    }
});
// UPDATE ROUTE
app.patch("/user/:id",(req,res)=>{
    let id=req.params.id;
    let newusern=req.body.usname;
    let password=req.body.pass;
    let usr=[id,newusern,password];
    // let q=`UPDATE USER SET username=? where id=? AND password=?`;
    let q=`SELECT * FROM USER WHERE ID="${id}";`;
    try{
        connection.query(q,(error,result)=>{
            if(error) {throw error};
            let user=result[0];
            if(password!=user.password)
            {
                res.send("WRONG PASSWORD!");
            }else{
              let q2=`UPDATE USER SET username="${newusern}" where id="${id}";`; 
              try{
                connection.query(q2,(error,result)=>{
                if(error) {throw error}
                res.redirect("/user");
                }) ;
              }catch(error)
              {
                console.log(error);
              }
            }
            // res.send(user);
        });
    }catch(error)
    {
        console.log(error);
    }
    // res.send(`${newusern},${password}`);
})
// CREATE NEW USER ROUTE
app.get("/user/new",(req,res)=>{
    res.render("newuser.ejs");
});
app.post("/user/new",(req,res)=>{
    let ob=req.body;
    let usr=[ob.id,ob.uname,ob.email,ob.password];
    let q=`INSERT INTO USER (id,username,email,password) values(?,?,?,?);`
    try{
        connection.query(q,usr,(error,result)=>{
            if(error){throw error}
            console.log(result);
            res.redirect("/user");
        });
    }catch(error)
    {
        console.log(error);
    }
});
// DELETE ROUTE
app.get("/user/:id/delete",(req,res)=>{
    let id=req.params.id;
    let q=`SELECT * FROM USER WHERE ID="${id}";`;
    try{
        connection.query(q,(error,result)=>{
            if(error){throw error};
            let user=result[0];
            res.render("delusr.ejs",{user});
        });
    }catch(err)
    {
        console.log(err);
    }
});
app.delete("/user/:id",(req,res)=>{
    let id=req.params.id;
    let pass=req.body.pass;
    let q=`SELECT * FROM USER WHERE ID="${id}";`
    try{
        connection.query(q,(error,result)=>{
            if(error){throw error;}
            let user=result[0];
            if(user.password===pass)
            {
                let q=`DELETE FROM USER WHERE ID="${id}";`;
                try{
                    connection.query(q,(error,result)=>{
                        if(error){throw error}
                        // res.send("User Deleted");
                        res.redirect("/user")
                    });
                }catch(err)
                {
                    console.log(err);
                }
            }
        })
    }catch(err)
    {
        console.log(err);
    }
});
app.listen(port,()=>{
    console.log("Server Started!! On port 8080");
});