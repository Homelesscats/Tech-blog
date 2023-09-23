const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const profileRoutes = require("./profileRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/profile", profileRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

// git commit -m "added routes to controllers index.js, "
