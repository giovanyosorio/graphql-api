import {GraphQLObjectType, GraphQLSchema} from "graphql"
import {hello} from "./queries.js"

const RootType=new GraphQLObjectType({
    name:"Rootype",
    description:"The root query type",
    fields:{
        hello,
    }
})

export  const schema=new GraphQLSchema({
    query:RootType
})

