const express= require("express");
const App = express();

app.get("/hello",(req,res)=>{
  res.send("hello world")
})
