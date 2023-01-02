const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.sendFile("somthing.html",{root:__dirname});
})
app.listen(3000,()=>{
    console.log("server is running");
});