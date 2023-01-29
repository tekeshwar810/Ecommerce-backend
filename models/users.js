const mongoose = require("mongoose");
const schema = mongoose.Schema

const userSchema = new schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    // dob:{
    //     type:String
    // },
    profile_pic:{
        type:String,
    },
    token:{
        type:String,
        default:""
    },
    role:{
        type:Number,
        default:0 //0= user and 1= admin
    },
    group_ids:[{
        type:schema.Types.ObjectId,
        ref:"groups"
    }]


},{timestamps:true})

module.exports = mongoose.model("users", userSchema);
