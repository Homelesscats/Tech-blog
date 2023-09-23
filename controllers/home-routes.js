const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// Homepage route
router.get("/", async (req, res) => {
  try {
    // Fetch all posts from the database
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["text", "user_id"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });

    // Serialize the data for rendering
    const posts = postData.map((post) => post.get({ plain: true }));

    // Check if the user is logged in
    const loggedIn = req.session.logged_in;

    res.render("homepage", {
      posts,
      loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
