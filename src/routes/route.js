const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package
const underscore = require('underscore')

const abc = require('../Logger/Logger')
const def = require('../validator/formatter')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    // //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    // //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)



//  Problem - 1
    abc.welcomefunction();

//  Problem - 3
   console.log(def.TrimData());
    console.log(def.Lowercase());
    def.Uppercase();
    
    //  Problem - 4
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    console.log(lodash.chunk(month,3))
    
    let OddNum = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(OddNum,9))

    let Arrays =  [ [1,2,3],[2,3,4],[4,5,6],[6,7,8],[8,9,10] ]
    console.log(lodash.union(Arrays))

    let pairs = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"] ]
    console.log(lodash.fromPairs(pairs))



    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

