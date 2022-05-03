const router = require("express").Router();
const Ride = require("../models/Ride.model")

/* GET add ride page */
router.get("/create", (req, res, next) => {
  res.render("ride/createRide", { isSession: req.session.user });
});

router.post("/create", (req, res) => {
  const driver = req.session.user._id
   
  
  Ride.create({...req.body, driver})
    .then(newRide => {
      res.redirect("/ride/allRides", { isSession: req.session.user })
    })
    .catch(err => console.log(err))
  })
  
  
  
  
  
  /* GET search ride page */
router.get("/search", (req, res, next) => {
  res.render("ride/searchRide", { isSession: req.session.user });
});

module.exports = router;