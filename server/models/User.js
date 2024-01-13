const { Schema, model } = require("mongoose");

const User = new Schema({
    username: { type: String, unique: true, required: true },
    useremail: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, ref: "Role", required: false}]
});

module.exports = model("User", User);
