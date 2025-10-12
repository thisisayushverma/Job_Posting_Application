import mongoose from "mongoose";

const medicalrecSchema= new mongoose.Schema({},{timestamps:true})

export const Medicalrec = mongoose.model("Medicalrec",medicalrecSchema)