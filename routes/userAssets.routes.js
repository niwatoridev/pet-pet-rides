const router = require("express").Router();

/* GET pet list page */
router.get("/pets", (req, res, next) => {
  res.render("userAssets/pets/petsList");
});




/* GET car list page */
router.get("/cars", (req, res, next) => {
    res.render("userAssets/cars/carsList");
});








module.exports = router;