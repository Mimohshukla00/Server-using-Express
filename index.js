// const express=require('express');
// const app =express()
// app.get("/health",(req,res)=>{
//     const username=req.headers.username;
//     const  password=req.headers.password;

//     // query = ?n
//     const kidneyID=req.query.kidneyID;
//      if(!username==="mimohshukla" || !password==="pass"){
//         req.status(400).json( {message:"Invalid Credentials"} )
//          return ;
//      }
//      if(kidneyID!=1 && kidneyID!=2){
//         req.status(400).json({message:"Kidney ID is invalid."})
//         return
//      }
//      res.json({message:`Health check passed for ${username}`});

//  })
//  app.listen(3000)

// newwwwwwwwwwwwwwwwwwww?  ?

// const express = require("express");
// const app = express();

// // query = ?n

// function middleware(req, res, next) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if (!username === "mimohshukla" || !password === "pass") {
//     res.status(400).json({ message: "Invalid Credentials" });
// } else {
//     next(); // pass control to the next middleware function
// }
// }

// function kidneyMiddleware(req, res, next) {
//     const kidneyID = req.query.kidneyID;
//   if (kidneyID != 1 && kidneyID != 2) {
//     res.status(400).json({ message: "Kidney ID is invalid." });
//   } else {
//     next();
//   }
// }
// // define a simple route handler for the home page
// app.get("/healthcheckup", middleware, kidneyMiddleware, function (req, res) {
//   // do something abput your kidney
//   res.send("your kidnney is healthy");
// });

// app.listen(3000);



// newwwwwwwwww  

const express = require("express");
const app=express();
app.use(express.json());
app.post("/kidney-checkup",function (req,res) {
const kidneys=req.body.kidneys;
const kidneysLength = kidneys.length;
res.send(`you have ${kidneysLength} in your body`)
    
})

// global catches
app.use((err,req,res,next)=>{
    res.json({
        msg:"something went wrong in  server  side",
        err
    });
})
app.listen(3000)