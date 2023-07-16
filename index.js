
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const User = require("./models/userModel")
app.use(express.json())



// app.get("/",async(req,res)=>{
//     res.send("hello world")
// })
const {signupRoute} = require("./routes/signupRoute")
const postRoute = require("./routes/postRoute")
app.use("/users",signupRoute)
app.use("/posts",postRoute)

app.listen(8080, async ()=>{
    try{
        await mongoose.connect("mongodb+srv://murad:murad@cluster0.8j6egxm.mongodb.net/?retryWrites=true&w=majority")
        console.log('connected');
    }
    catch(err){
        console.log(err);
    }
})






// Routes
//  - POST for posting the user detail while registration.
//  - GET for getting all the users details
//  - GET for getting the detail of a particular user.
//  - PATCH/PUT for updating the user details. ==> Only Admin can do this.
//  - DELETE for deleting a particular user detail ==> Only Admin can do this.
// Middlewares
// - Authenticator ==> Which will authenticate the user while login and allow the user to login.
// - validator ==> Which will validate the role of user while updating or deleting.
// - userLogger ==> This will log the username of the user along with the user's role once they login into a log.txt file.