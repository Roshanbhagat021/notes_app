const express = require("express")
const app=express()
const connectiondb = require("./src/config/db")
const userRoute = require("./src/Routes/user.Router")
const notesRoute = require("./src/Routes/notes.Router")
require("dotenv").config()

app.use(express.json())

app.use("/user",userRoute)
app.use("/notes",notesRoute)

app.get('/',(req,res)=>{
    res.send("Wecome to home page of Notes app")
})


app.listen(process.env.PORT,()=>{
    connectiondb()
    console.log(`Live on port ${process.env.PORT} and db also connected`);
})

