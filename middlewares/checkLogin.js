const checkLogin = (req, res, next) => {
  //사용자가 로그인 헀어?
  req.session.isLoggedIn = false;

  next();
};

module.exports = checkLogin;
