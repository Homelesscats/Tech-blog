const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, execute the route function that will allow them to view the page
    next();
  }
};

module.exports = withAuth;
