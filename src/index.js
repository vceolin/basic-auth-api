const express = require("express");
const bodyParser = require("body-parser");
const authMiddleware = require("./middlewares/auth");
const mainRoutes = require("./routes/main");
const authRoutes = require("./routes/auth");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/", mainRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/protected-route", authMiddleware, (req, res) => {
  res
    .status(200)
    .json({ message: `Rota protegida com sucesso. Olá ${req.user.username}` });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
