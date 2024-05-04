const {Schema , model}= require("mongoose")


const userSchema= new Schema({
    username:{type:String},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    userId:{type:String}
},{versionKey:false})

const userModel= model("user",userSchema)

module.exports = userModel