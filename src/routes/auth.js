const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const userModel = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await userModel.findUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: "Usuário já existe." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      password: hashedPassword,
    };

    await userModel.createUser(newUser);
    res.status(201).json({ message: "Usuário registrado com sucesso." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao registrar usuário." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findUserByUsername(username);

    if (!user) {
      return res.status(401).json({ message: "Usuário ou senha incorretos." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Usuário ou senha incorretos." });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      config.secretKey,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login." });
  }
});

module.exports = router;
