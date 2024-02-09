const express=require("express")
const resumemodel=require("../models/resumeModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let resume=new resumemodel(data)
    let result=await resume.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await resumemodel.find()
    res.json(data)
})

module.exports=router
