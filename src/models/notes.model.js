const {Schema,model}= require("mongoose")


const notesSchema= new Schema({
    title:{type:String,required:true},
    des:{type:String,required:true},
    status:{type:String,enum:["To-do","In-Progress","Done"],default:"To-do"},
    userId:{type:String},
    username:{type:String}
},{versionKey:false})

const notesModel= model("note",notesSchema)

module.exports = notesModel;