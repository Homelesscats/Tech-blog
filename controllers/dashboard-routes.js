const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// Dashboard route
router.get("/", withAuth, async (req, res) => {
  try {
    // Fetch the logged-in user's data along with their posts and comments
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Post,
          attributes: ["id", "title", "body", "created_at"],
        },
        {
          model: Comment,
          attributes: ["id", "text", "post_id", "created_at"],
          include: {
            model: Post,
            attributes: ["title"],
          },
        },
      ],
    });

    // Serialize the data for rendering
    const user = userData.get({ plain: true });

    res.render("dashboard", {
      user,
      loggedIn: true, // Since this route requires authentication, the user is logged in.
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
