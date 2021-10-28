const express = require("express");
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();

router.get("/list", (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("screens/board/list", { loggedIn });
});

router.get("/detail", (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("screens/board/detail", { loggedIn });
});

router.get("/write", (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("screens/board/write", { loggedIn });
});

router.get("/update", (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("screens/board/update", { loggedIn });
});

module.exports = router;
