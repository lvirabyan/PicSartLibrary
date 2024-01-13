const Router = require("express");
const router = new Router();
const controller = require("./authController");
const {check} = require("express-validator");
const authMiddleware = require("./middlwaree/authmiddlwaree")

console.log(authMiddleware);
router.post("/registration", [
    check("username" , 'The username field cannot be empty.').notEmpty(),
    check("password" , 'Password must contain at least 4 and maximum 10 characters').isLength({min:4,max:10}),
],controller.registration);
router.post("/login", controller.login);
router.get("/users", authMiddleware, controller.getUsers);



module.exports = router; 
