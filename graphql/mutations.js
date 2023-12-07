import {GraphQLString} from "graphql"
import User from "../models/User.js"

 export const register={
    type:GraphQLString,
    description:"register a new user",
    args:{
        username:{ type: GraphQLString},
        email:{
            type:GraphQLString
        },
        password:{
            type:GraphQLString
        },
        displayName:{
            type:GraphQLString
        },
    },
   async  resolve(_,args){
        console.log(args)
        const {username,email,password,displayName } =args
        const newUser=await User.create({
            username,email,displayName,password
        })
        console.log(newUser)
        return "new user created"
    }
}
