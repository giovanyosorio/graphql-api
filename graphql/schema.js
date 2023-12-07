import {GraphQLObjectType, GraphQLSchema} from "graphql"
import {hello} from "./queries.js"
import {register} from "./mutations.js"


const RootType=new GraphQLObjectType({
    name:"Rootype",
    description:"The root query type",
    fields:{
        hello,
    }
})

const MutationType=new GraphQLObjectType({
    name:"MutationType",
    description:"the root mutation type",
    fields:{
        register
    }
})

export  const schema=new GraphQLSchema({
    query:RootType,
    mutation:MutationType
})

