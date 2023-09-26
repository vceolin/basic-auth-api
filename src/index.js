const express = require("express");
const bodyParser = require("body-parser");
const authMiddleware = require("./middlewares/auth");
const frontendRoutes = require("./routes/frontend");
const mainRoutes = require("./routes/main");
const authRoutes = require("./routes/auth");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/protected-route", authMiddleware, mainRoutes);
app.use("/", frontendRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
