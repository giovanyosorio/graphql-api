import mongoose from "mongoose"

export const connectDB=async ()=>{
   await mongoose.connect("mongodb+srv://gio:e3b3b8454@cluster0.8amxfsj.mongodb.net/")
    .then(()=>console.log("conectado a la base de datos"))
    .catch((error=>console.log(error)))
}
