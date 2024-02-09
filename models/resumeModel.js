const mongoose=require("mongoose")

const resumeschema=new mongoose.Schema(
    {
        name:String,
        email:String,
        phone:String,
        housename:String,
        place:String,
        pincode:String,
        district:String,
        gender:String,
        age:String,
        qualification:String,
        skills:String,
        achievements:String,
        certifications:String,
        hobbies:String,
        referencename:String,
        referencequal:String,
        referencenum:String
    }
)

module.exports=mongoose.model("resumedetails",resumeschema)