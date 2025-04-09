var express=require("express");
require('./db')
var userRoutes=require('./route/userRoutes')
var productroutes=require('./route/productroutes')
var app=express();
// changes
app.use(express.json());
var port =4000;
app.use('/api',userRoutes)
app.use('/api1',productroutes)
app.listen(port,(req,res)=>{
   console.log(`Server is up and Running in ${port}`)
})
