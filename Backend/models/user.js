var mongoose = require('mongoose')
var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
})
var user_model = mongoose.model("users", userSchema)
module.exports = user_model
