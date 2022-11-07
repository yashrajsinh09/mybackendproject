const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const isTokenValid = async function (req, res, next) {

    let header = req.headers["x-auth-token"]

    if (!header) {
        res.send({
            status: false,
            msg: "Token is not Available",
        })
    }
    let verifyingToken = jwt.verify(header, "lithium-yashraj")
    req.verifyingToken = verifyingToken;
    next()
}

const autherisation = function(req, res, next){
    let userId = req.params.userId;
    if(req.decode.userId !=userId){
        return res.send("You cant update details")
    }
    next()
}

module.exports = {isTokenValid,autherisation}