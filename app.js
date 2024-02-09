const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const loginroute=require("./controllers/loginRouter")
const resumeroute=require("./controllers/resumeRouter")

//alias name
const app=express()

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://mahi17700:mahi123@cluster0.6apodnl.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewURLParser:true})


//routing
app.use("/api/login",loginroute)
app.use("/api/resume",resumeroute)

app.listen(3000,()=>{
    console.log("server running...")
})