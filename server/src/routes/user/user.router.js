const express = require("express");
const userRouter = express.Router();
const { httpGetAuthDetails } = require("./user.controller");

userRouter.get("/authed", httpGetAuthDetails);


module.exports = userRouter;