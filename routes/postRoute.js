
const mongoose = require("mongoose")
const express = require("express")
// const signupRoute = express.Router()
const Router = express.Router()
const Post = require("../models/postModel")
const authmiddleware = require("../middleware/authmiddleware")
const User = require("../models/userModel")


Router.post("/",authmiddleware, async(req,res)=>{

   
    try {
        
        const {title,content} = req.body;
        const post = await Post.create({title,content,creator:req.userId})
        
        await post.populate("creator")

        res.send(post)

    } catch (error) {
        console.log('error');
    }
})

Router.get("/", authmiddleware,async(req,res)=>{
    try {
        let {page} = req.query;
        if(page){
            page=1
        }

        const data = await Post.find({}).skip((page-1)*15).limit(15)
        const total = await Post.countDocuments();

        res.status(200).send({data:data, currentPage: page})

    } catch (error) {
        console.log(error);
    }
})
module.exports = Router