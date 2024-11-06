async function httpGetAuthDetails(req, res) {
  // probably read cookie and validate jwt token
  res.json({
    user: null,
  });
}


module.exports ={
    httpGetAuthDetails,
}