const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalschema=new Schema({
    name:String,
    email:String,
    company:String,
    mobile:Number

})
const vehicleschema=new Schema({
    plateno:String,
    type:String,
    modelname:String
})

const schema=new Schema({
    personal:personalschema,
    vehicle:vehicleschema
})
const User=mongoose.model("data",schema)

module.exports=User