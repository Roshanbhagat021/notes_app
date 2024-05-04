const {Schema , model}= require("mongoose")


const logoutSchema= new Schema({
  logoutId:{type:String}
},{versionKey:false})

const logoutModel= model("logoutID",logoutSchema);

module.exports = logoutModel;