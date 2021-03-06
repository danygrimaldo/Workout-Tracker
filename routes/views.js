const router = require("express").Router();
const path = require("path");
// const { dirname } = require("path");

router.get("/exercise", (req, res) => {
  res.sendfile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendfile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
