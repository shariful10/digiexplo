import { Schema, model } from "mongoose";
import { ISessions } from "./session.interface";


const sessionSchame = new Schema<ISessions>({
    
    username:String,
    otp:Number,
    email:String,
    createdAt: { type: Date, expires: 300, default: Date.now },
})


export const SessionModel =  model<ISessions>('sessions',sessionSchame)