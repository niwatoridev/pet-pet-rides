const router = require("express").Router();

/* GET pet list page */
router.get("/pets", (req, res, next) => {
  res.render("userAssets/pets/petsList", { isSession: req.session.user });
});




/* GET car list page */
router.get("/cars", (req, res, next) => {
    res.render("userAssets/cars/carsList", { isSession: req.session.user });
});


module.exports = router;