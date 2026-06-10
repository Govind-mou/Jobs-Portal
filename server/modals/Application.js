import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
{
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    },

    resume:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Resume"
    },

    status:{
        type:String,
        enum:[
            "Applied",
            "Shortlisted",
            "Interview",
            "Rejected",
            "Hired"
        ],
        default:"Applied"
    },

    matchScore:{
        type:Number,
        default:0
    }
},
{timestamps:true}
);

export default mongoose.model(
    "Application",
    applicationSchema
);