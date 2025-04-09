var mongoose=require('mongoose');
var productschema =mongoose.Schema({
    pname:String,
    pQuatity:String,
    pPrice:Number,
    pBrand:String,
    
})
var pModel=mongoose.model("product",productschema);
module.exports=pModel;