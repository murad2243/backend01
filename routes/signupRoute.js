
const mongoose = require("mongoose")
const express = require("express")
const signupRoute = express.Router()
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const blacklist = require("./blacklist")
const jwt = require("jsonwebtoken")
signupRoute.post("/register",async (req,res)=>{
    
    try{
        const { username, email, dob,role,location,password} = req.body

        const newpass = await bcrypt.hash(password,5)

        const user =  new User({username,email,dob,role,location, password: newpass})
        await user.save()

        console.log(req.body,"fdskl");

        res.status(200).send({msg:"user has registered", user})
    }
    catch(err){
        // res.status(500).send("invalid")
        console.log(err);
    }
        

})

signupRoute.post("/login",async (req,res)=>{
    const { email,password, userId} = req.body
console.log(email,password,userId)
    try{

        const user = await User.findOne({email})
        if(!user){
            res.status(400).send("user is not registered")
        }
        const verify = await bcrypt.compare(password,user.password)
        if(verify){

            const token = jwt.sign({userId:user._id},"secretpass")
            res.status(200).send({msg:"login successfuly",token})
        }
        else{
            res.send("incorrect password")
        }
      
    }
    catch(err){
        res.status(500).send("invalid")
    }
        
    
})
signupRoute.post("/logout",(req,res)=>{
  
    try {
       
            blacklist.push(token)
            res.status(200).send("blacklisted the token") 
    } catch (error) {
        console.log(error);
    }

})
    

module.exports = {signupRoute}