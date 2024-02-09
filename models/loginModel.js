const mongoose=require("mongoose")

const loginschema=new mongoose.Schema(
    {
        name:String,
        age:String,
        email:String,
        username:String,
        password:String
    }
)

module.exports=mongoose.model("resumes",loginschema)