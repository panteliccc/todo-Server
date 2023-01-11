const mongoose = require("mongoose");
const todoShema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    },
    active:{
        type:Boolean
    }
})
module.exports = mongoose.model("ToDo",todoShema);