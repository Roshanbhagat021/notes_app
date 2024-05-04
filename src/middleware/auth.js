const jwt = require("jsonwebtoken");
require("dotenv").config()


const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) {
        res.status(401).send("You are not authorize");
    } else {
      req.body.userId=decoded.id
      req.body.username= decoded.username
      next();
    }
  });
};

module.exports = auth;
