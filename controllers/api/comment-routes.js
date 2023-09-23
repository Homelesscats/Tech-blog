const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

// Create a new comment
router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newComment = await Comment.create({
      ...body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an existing comment by ID
router.put("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Comment.update(req.body, {
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

// Delete a comment by ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Comment.destroy({
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
