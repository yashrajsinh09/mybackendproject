const Name = "FunctionUp"

let Trim = function() {
    let Trim1 = Name.trim()
    //console.log(Name.trim())
    return Trim1
 }

 let Lowercase = function() {
    let Lowercase1 = Name.toLowerCase()
    //console.log(Name.toLowerCase())
    return Lowercase1
 }

 let Uppercase = function() {
    //console.log(Name.toUpperCase())
    let Uppercase1 = Name.toUpperCase()
    return Uppercase1
 }


module.exports.TrimData = Trim
module.exports.Lowercase = Lowercase
module.exports.Uppercase = Uppercase
