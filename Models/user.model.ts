import mongoose from "mongoose";
import validator from "validator";
import { hashPasswordBeforeSaving, setPasswordChangedAt } from "../Middlewares/user.middleware";
import { mongoInstance } from "../Mongo/connection";
import type { User } from "../Types/model.types";

export const userSchema = new mongoose.Schema({
    name : {
        type  : String,
        required : true,
        lowercase : true,
        trim : true
    },
    email : {
        type : String ,
        required : true,
        unique : true ,
        trim : true,
        validate : validator.isEmail
    },
    password : {
        type : String , 
        required : true,
        mingLength : 6,
    },
    confirmPassword : {
        type : String ,
        required : true,
        validate : function(this : Record<string , string>,value : string){
            return value === this.password
        }
    },
    passwordChangedAt : Date
} )

userSchema.pre("save" , hashPasswordBeforeSaving);
userSchema.pre("findOneAndUpdate" , setPasswordChangedAt)


export const UserModel = mongoInstance.getModel<typeof userSchema , User.UserSchemaMethods , {}>('test_user' , userSchema)