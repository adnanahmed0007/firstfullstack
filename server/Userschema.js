import mongoose from "mongoose";
const employee=mongoose.Schema({
    name:
    {
        type:String,
        required:true
    }
    ,
    email:
    {
        type:String,
        required:true,
        unique:true,
        
    }
    ,
    mobileno:
    {
        type:Number,
        required:true,
        unique:true,
        
    },
    password:
    {
        type:String,
        required:true,
        
    },
     
    address:
    {
        type:String,
        required:true,

    }
    ,
    content:
    {
        type:String,
        
    }
},{timestamps:true})
export const Employeemode1=mongoose.model("employeeModel",employee);