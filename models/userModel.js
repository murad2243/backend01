const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, require: true},
    dob: {type: String, require: true},
    role: {type: String, require: true},
    location: {type: String, require: true},
    password: {type: String, required: true},
})




const User =  mongoose.model("user", userSchema)
module.exports = User


// There should be a registration form with following fields.
// -username ==> Input Field
// -email ==> Input Field
// -DOB ==> Input Field
// -Role ==> Dropdown Menu (Admin, Explorer)
// -location ==> Input Field
// -password ==> Input Field (Type: Password)
// -confirm password ==> Input Field (Type: Password)
// - The user should be registered only if password and confirm password field contains the same string.
// - These user detail should be registered in MongoDB Atlas.