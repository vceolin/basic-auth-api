const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: `Rota protegida com sucesso. Olá ${req.user.username}` });
});

module.exports = router;
