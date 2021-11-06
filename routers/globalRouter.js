const express = require("express");
const checkLogin = require("../middlewares/checkLogin");
const db = require("../db");

const router = express.Router();

router.get("/", checkLogin, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;

  res.render("screens/main", { loggedIn });
});

router.get("/signup", checkLogin, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;

  res.render("screens/signup", { loggedIn });
});

router.post("/signup", (req, res, next) => {
  const insertQuery = `
  INSERT INTO users (
    email,
    password,
    mobile,
    name,
    createdAt,
    updatedAt
  ) VALUES (
    "${req.body.input_email}",
    "${req.body.input_password}",
    "${req.body.input_mobile}",
    "${req.body.input_name}",
    now(),
    now()
  )
  `;

  try {
    db.query(insertQuery, (err, rows) => {
      if (err) {
        return console.log(err);
      }

      if (!err) {
        return res.redirect("/");
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send("회원가입에 실패하셨습니다.");
  }
});

router.get("/signin", checkLogin, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("screens/signin", { loggedIn });
});

module.exports = router;
