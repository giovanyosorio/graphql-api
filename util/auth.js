import jwt from "jsonwebtoken"

export const creatJWToken=user=>{
   return jwt.sign(user,"hello",{
        expiresIn:"1h"
    })
}
