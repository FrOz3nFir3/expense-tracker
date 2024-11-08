const express = require("express");
const userRouter = express.Router();
const {
  httpGetAuthDetails,
  httpCreateNewUser,
  httpLoginUser,
  httpLogoutUser,
  httpUpdateUser,
} = require("./user.controller");
const { requireAuthentication } = require("../../middleware/auth.middleware");

userRouter.get("/authed", requireAuthentication, httpGetAuthDetails);
userRouter.post("/register", httpCreateNewUser);
userRouter.post("/login", httpLoginUser);
userRouter.post("/logout", httpLogoutUser);
userRouter.patch("/", requireAuthentication, httpUpdateUser);

module.exports = userRouter;
