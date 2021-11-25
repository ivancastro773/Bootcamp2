const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const app = express();
let port = process.env.PORT || 3000;

app.use(cors());
app.use(methodOverride());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const posts = [
  {
    title: "hola",
    detail: "desc",
    category: "tecnologia",
    vote: 2,
    comments: [],
    user: "ivan",
  },
];
const ObjPost = [
  {
    title: "",
    detail: "",
    category: "",
    vote: 0,
    comments: [],
    user: "",
  },
];
app.get("/posts", (req, res) => {
  res.send(posts[0]);
});
app.listen(port, () => {
  console.log("Escuchando en el puerto 3000");
});
