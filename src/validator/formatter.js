let Name = "FunctionUp"

let TrimData = function() {
    let Trim = Name.trim()
    //console.log(Name.trim())
    return Trim
 }

 function Lowercase() {
    let Lowercase1 = Name.toLowerCase()
    //console.log(Name.toLowerCase())
    return Lowercase1
 }

 function Upppercase() {
    console.log(Name.toUpperCase())
 }


module.exports.TrimData = TrimData
module.exports.Lowercase = Lowercase
module.exports.Uppercase = Upppercase
