var express = require("express");
var app = express();
// var db = require("./db.js");
var cors = require("cors");

const HTTP_PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(HTTP_PORT, () => {
  console.log("Server is listening on port " + HTTP_PORT);
});

const comments = [];

app.post("/comments", (req, res) => {
  const { name, text } = req.body;
  const comment = {
    name,
    text,
    createdAt: new Date(),
    id: comments.length + 1,
  };
  comments.push(comment);

  return res.json(comment);
});

app.get("/comments", (req, res, next) => {
  return res.json(comments);
});
