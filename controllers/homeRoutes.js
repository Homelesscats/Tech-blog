const express = require("express");
const router = express.Router();
const { Post, Comment, User } = require("../models/");

// Middleware for checking if a user is logged in
const checkLoggedIn = (req, res, next) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  } else {
    next();
  }
};

// Error handling middleware
const handleErrors = (res, err) => {
  console.error(err);
  res.status(500).json({ error: "An internal server error occurred." });
};

// GET all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("posts", { posts });
  } catch (err) {
    handleErrors(res, err);
  }
});

// GET a single post by ID
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("single-post", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    handleErrors(res, err);
  }
});
// Render login page
router.get("/login", checkLoggedIn, (req, res) => {
  res.render("login");
});

// Render signup page
router.get("/signup", checkLoggedIn, (req, res) => {
  res.render("signup");
});

module.exports = router;
