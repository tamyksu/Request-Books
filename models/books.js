const mongoose = require('mongoose')


const BuildSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    _id:{
        type:Number,
        required:true
    }

}
);

module.exports = mongoose.model("Book",BuildSchema);