const {Router}= require("express")
const notesModel = require("../models/notes.model")
const auth = require("../middleware/auth")

const notesRoute= Router()

notesRoute.get("/",auth,async(req,res)=>{
    const {userId}= req.body;
    try {
        const notes = await notesModel.find({userId})
        res.send(notes)
    } catch (error) {
        res.status(501).send(error)
    }
})

notesRoute.post("/create",auth,async(req,res)=>{
const {title,des,status,userId,username}= req.body;
console.log('req.body: ', req.body);

    try {
        const newNotes= new notesModel({title,des,status,userId,username})
        await newNotes.save()
        res.send("Notes created successfully")
    } catch (error) {
        res.status(501).send(error)
    }
})


notesRoute.patch("/update/:id",auth,async(req,res)=>{
    const {id}= req.params
    try {
        await notesModel.updateOne({_id:id},req.body)
        res.send("Notes updated successfully")
        
    } catch (error) {
        res.status(500).send("Internal server error")
    }
})

notesRoute.delete("/delete/:id",auth,async(req,res)=>{
    const {id}= req.params
    try {
        await notesModel.deleteOne({_id:id})
        res.send("Notes Deleted successfully")
        
    } catch (error) {
        res.status(500).send("Internal server error")
    }
})


module.exports = notesRoute;