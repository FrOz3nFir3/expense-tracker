const jwt = require("jsonwebtoken");

// require("dotenv").config({ path: "../.env" });
require("dotenv").config({ path: require("find-config")(".env") });

const JWT_SECRET = process.env.JWT_SECRET;

const TWO_DAYS = 172800000;

function createNewToken(id) {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: TWO_DAYS,
  });
}

function getToken(token = "") {
  if (!token) return null;
  try {
    let decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (e) {
    console.log(e);
    return null;
  }
}

function sendCookie(res, data) {
  const token = createNewToken(data);

  res.cookie("jwt", token, {
    httpOnly: true,
    signed: true,
    maxAge: TWO_DAYS,
    secure: process.env.NODE_ENV === "production",
  });
}

module.exports = {
  createNewToken,
  getToken,
  sendCookie,
};
