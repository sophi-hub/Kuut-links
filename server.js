const express = require("express");
const cors = require("cors");
const path = require("path");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use("/", urlRoutes);

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
