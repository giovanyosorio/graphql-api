
import express from "express"
import {graphqlHTTP} from "express-graphql"
const app=express()
import {schema} from "./graphql/schema.js"
import {connectDB} from "./db/index.js"


connectDB()
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(3000,()=>{
    console.log("siriviendo en localhost 3000")
})