const router = require("express").Router();

/* GET add ride page */
router.get("/create", (req, res, next) => {
  res.render("ride/ride");
});

module.exports = router;