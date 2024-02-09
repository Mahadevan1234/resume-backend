const express=require("express")
const loginmodel=require("../models/loginModel")
const bcrypt=require("bcryptjs")

const router=express.Router()

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let login=new loginmodel(data)
            let result=login.save()
        }
    )
    res.json({
        status:"successfully added"
    })
})

router.post("/signin",async(req,res)=>{
    let input=req.body
    let uname=req.body.username
    let data=await loginmodel.findOne({"username":uname})
    if (!data) {
        return res.json({
            status:"invalid user"
        })
    }
    console.log(data)
    let dbpassword=data.password
    let inputpassword=req.body.password
    console.log(dbpassword)
    console.log(inputpassword)
    const match=await bcrypt.compare(inputpassword,dbpassword)
    if (!match) {
        return res.json({
            status:"incorrect password"
        })
    }
    res.json({
        status:"success"
    })
})

module.exports=router