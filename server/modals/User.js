import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        enum:["jobseeker","recruiter","admin"],
        default:"jobseeker"
    },

    profileImage:String,

    skills:[String],

    experience:String,

    education:String,

    resumeUrl:String
},
{timestamps:true}
);

export default mongoose.model("User",userSchema);