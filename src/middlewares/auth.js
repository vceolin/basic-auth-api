const jwt = require("jsonwebtoken");
const config = require("../config/config");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido." });
  }

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido." });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
