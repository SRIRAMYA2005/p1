const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "regNo":{type:Number}
},{
    collection:"Students"
})


module.exports = mongoose.model("studentSchema",studentSchema);
