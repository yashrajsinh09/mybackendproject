const jwt = require ("jsonwebtoken")


const Authentication=async function(req,res,next){
    
    let token=req.headers["x-auth-Token"]
    if(!token)token=req.headers["x-auth-token"]
    if(!token) return res.send({status:false,msg:"Token is required."})
    
    let decodeToken=jwt.verify(token,"lithium-yashraj")
    req["decodeToken"]=decodeToken

    if(!decodeToken) return res.send({status:false,msg:"Token is invlid"})
    
    next()
}



// let authorization=async function(req,res,next){
    
//     let loggedInUserId= req.decodeToken.userId
//     let reqestedUserId=req.params.userId
//     // console.log(reqestedUserId,loggedInUserId)
//     if(reqestedUserId != loggedInUserId ){
//         return res.send({status:false,message:"no permission"})
//     }
//     next()
// }


const authorization = function(req, res, next){
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send("Header is not avilable")
    }
    
    let decode = jwt.verify(token, "lithium-yashraj")
    if(!decode){
        return res.send("invalid Token")
    }
    let usertobe = req.params.userId
    let userlogin = decode.Id
    if(usertobe != userlogin){
        res.send({msg: "Its Not your Id"})
    }
    next()
}






module.exports.Authentication=Authentication
module.exports.authorization=authorization      