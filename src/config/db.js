const {connect} = require("mongoose")
require("dotenv").config()

const connectiondb=async()=>{
     await connect(process.env.DBURL)
}


module.exports= connectiondb;



