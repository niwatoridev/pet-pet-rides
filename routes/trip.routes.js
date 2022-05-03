const router = require("express").Router();

/* GET add ride page */
router.get("/new", (req, res, next) => {
  res.render("trip/trip.hbs");
});

module.exports = router;