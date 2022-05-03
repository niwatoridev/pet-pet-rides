const router = require("express").Router();

/* GET add ride page */
router.get("/create", (req, res, next) => {
  res.render("ride/createRide");
});

router.get("/search", (req, res, next) => {
  res.render("ride/searchRide.hbs");
});

module.exports = router;