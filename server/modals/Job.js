import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },

    company:{
        type:String,
        required:true
    },

    location:String,

    salary:String,

    description:String,

    skillsRequired:[String],

    recruiter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
{timestamps:true}
);

export default mongoose.model("Job",jobSchema);