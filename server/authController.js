const User = require("./models/User");
const Role = require("./models/Role");
const bcrypt = require('bcryptjs');
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const {secret} = require("./config")

const generationAcssesToken = (username,  useremail, roles) => {
    const payload = {
        username,
        useremail,
        roles,
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"});
}
class AuthController {
    async registration (req, res) {
        try {
const {validationResult} = require("express-validator")
            const errors = validationResult(req);
            console.log(req.body)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Error during registration.", errors})
            }
            const {username, password, useremail}  = req.body;
            const candidate = await User.findOne({useremail})
            
            if(candidate) {
                return res.status(400).json({message: "Such user already exists"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: "USER"});

            const user = new User({username, password: hashPassword, roles : [userRole.value], useremail : useremail})
            await user.save();
            return res.json({message : "User added successfully"})
        }catch(e){
            console.log(e);
            res.status(404).json({message : "Registartion Error"})
        }
    }
    async login (req, res) {
        try {
            console.log(req.body,"body");
            const  {username, password, useremail} = req.body;
            const user = await User.findOne({useremail})
            console.log(user,"user");

            if(!user) {
                return res.status(400).json({message: `User ${username} not found.`})
            }

            const validPassword = bcrypt.compareSync(password, user.password);
            console.log("error", user, validPassword);

            if(!validPassword) {

                return res.status(400).json({message: `Incorrect password entered.`})

            }
            const token = generationAcssesToken(user.username, user.useremail, user.roles);
            console.log(token);
            return  res.json(token)
        }catch(e){
            console.log(e);
            res.status(404).json({message : "Login  Error"})
        }
    }
    async getUsers (req, res) {
        try {
            const users = await User.find()
            return res.json(users);
        }catch(e){
            console.log(e);
        }
    }
}
module.exports = new AuthController()