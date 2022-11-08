const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Midd = require("../middleware/auth")

router.post("/users",userController.createUser)
router.post("/login",userController.loginUser)
router.get("/users/:userId",Midd.Authentication,Midd.authorization,userController.getUserData)
router.put("/users/:userId",Midd.Authentication,Midd.authorization,userController.updatedata)
router.delete("/users/:userId",Midd.Authentication,Midd.authorization,userController.deleteData)
 


module.exports = router;








// const express = require('express');
// const router = express.Router();
// const userController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

// router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

// module.exports = router;