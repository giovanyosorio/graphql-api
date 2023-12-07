import   {Schema,model} from "mongoose"

const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[
            /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ,
            "provide a email valid"
        ]
    },
    displayName:{
        type:String,
        required:true
    },
},{
    timestamps:true,
    versionKey:false
})


export default model("User", userSchema);
