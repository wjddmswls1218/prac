const express = require("express");

const router = express.Router();

router.get("/list", (req, res, next) => {
  res.render("screens/board/list");
});

router.get("/detail", (req, res, next) => {
  res.render("screens/board/detail");
});

router.get("/write", (req, res, next) => {
  res.render("screens/board/write");
});

router.get("/update", (req, res, next) => {
  res.render("screens/board/update");
});

module.exports = router;
