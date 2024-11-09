const bcrypt = require("bcrypt");
const { sendCookie } = require("./auth.controller");
const {
  createNewUser,
  findUserByEmail,
  updateUserDetails,
} = require("../../models/users/users.model");
const User = require("../../models/users/users.mongo");

const EmailValidator = require("email-deep-validator");
const emailValidator = new EmailValidator({ timeout: 2000 });

async function httpGetAuthDetails(req, res) {
  const token = req.token;

  if (token == null) {
    res.status(200).json({ user: null });
  } else {
    let user = await User.findById(token.id, { password: 0, _id: 0, __v: 0 });
    res.status(200).json({ user });
  }
}

async function httpCreateNewUser(req, res) {
  const newUser = req.body;
  try {
    if (newUser.password != newUser.confirmPassword) {
      return res.status(409).json({ error: "confirm password does not match" });
    }

    const userExists = await findUserByEmail(newUser.email);
    if (userExists != null) {
      return res.status(409).json({ error: "email already exist" });
    }

    const { validDomain, validMailbox } = await emailValidator.verify(
      newUser.email,
    );
    if (validDomain == false || validMailbox == false) {
      return res.status(409).json({ error: "Invalid Email" });
    }

    const user = await createNewUser(newUser);
    sendCookie(res, user._id);

    // can use rest operator as well
    delete user._doc.password;
    delete user._doc._id;
    delete user._doc.__v;
   
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}

async function httpLoginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (user == null) {
      return res.status(401).json({ error: "email does not exist" });
    }

    const isCorrect = await bcrypt.compare(password, user.password);
    if (isCorrect == false) {
      return res.status(401).json({ error: "password does not match" });
    }

    sendCookie(res, user._id);

    // can use rest operator as well
    delete user._doc.password;
    delete user._doc._id;
    delete user._doc.__v;
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

function httpLogoutUser(req, res) {
  let containsCookies = req.signedCookies.jwt;

  if (containsCookies) {
    res.clearCookie("jwt");
    res.status(204).end();
  } else {
    res.status(404).json({ error: "no user to logout" });
  }
}

async function httpUpdateUser(req, res) {
  const token = req.token;

  if (token == null) {
    return res
      .status(401)
      .json({ error: "Authentication / Login required - cookies not set" });
  }

  try {
    const updatedUser = await updateUserDetails(req.body, token);
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  httpGetAuthDetails,
  httpCreateNewUser,
  httpLoginUser,
  httpLogoutUser,
  httpUpdateUser,
};
