var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    title: "Name",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    title: "Name",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    title: req.body.title,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
