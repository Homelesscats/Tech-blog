const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");

// Display all posts for the authenticated user
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    // Render the 'all-posts-admin' view with the 'dashboard' layout
    res.render("all-posts-admin", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    // Redirect to the login page if an error occurs
    res.redirect("login");
  }
});

// Render the form for creating a new post
router.get("/new", withAuth, (req, res) => {
  // Render the 'new-post' view with the 'dashboard' layout
  res.render("new-post", {
    layout: "dashboard",
  });
});

// Render the form for editing a specific post
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      // Render the 'edit-post' view with the 'dashboard' layout
      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      // Return a 404 response if the post is not found
      res.status(404).end();
    }
  } catch (err) {
    // Redirect to the login page if an error occurs
    res.redirect("login");
  }
});

module.exports = router;
