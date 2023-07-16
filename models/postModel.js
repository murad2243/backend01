const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    
    title: {type: String, require: true},
    content : {type: String, require: true},
    creator: {type:mongoose.Schema.Types.ObjectId, ref:"user"}
})

module.exports = mongoose.model("Post",postSchema)
