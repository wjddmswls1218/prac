const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("screens/main");
});

router.get("/signup", (req, res, next) => {
  res.render("screens/signup");
});

router.get("/signin", (req, res, next) => {
  res.render("screens/signin");
});
module.exports = router;
