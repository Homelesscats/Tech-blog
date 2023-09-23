const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");

// Create a new post
router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an existing post by ID
router.put("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.sendStatus(200); // Success
    } else {
      res.sendStatus(404); // Not Found
    }
  } catch (err) {
    res.status(500).json(err); // Internal Server Error
  }
});

// Delete a post by ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.sendStatus(200); // Success
    } else {
      res.sendStatus(404); // Not Found
    }
  } catch (err) {
    res.status(500).json(err); // Internal Server Error
  }
});

module.exports = router;
