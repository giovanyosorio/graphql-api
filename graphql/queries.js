import {GraphQLString} from "graphql"

 export const hello={
    type:GraphQLString,
    description:"return a atring",
    resolve:()=>"hello world"
}
