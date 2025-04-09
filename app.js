var express=require("express");
var dotenv=require("dotenv");

var userRoutes=require('./route/userRoutes')
var productroutes=require('./route/productroutes')
var app=express();
dotenv.config();
require('./db');
var port=process.env.PORT;




// changes
app.use(express.json());

app.use('/api',userRoutes)
app.use('/api1',productroutes)
app.listen(port,(req,res)=>{
   console.log(`Server is up and Running in ${port}`)
})
