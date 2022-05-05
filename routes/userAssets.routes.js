const router = require("express").Router();
const Car = require("../models/Car.model");
const User = require("../models/User.model");
const Pet = require("../models/Pet.model");
const Ride = require("../models/Ride.model")



/* GET and Render User's Pet list  */
router.get("/pets", (req, res, next) => {
  const { _id } = req.session.user

User.findById(_id)
.populate("pet")
.then((user) => {
  console.log(user)
  res.render("userAssets/pets/petsList", { isSession: req.session.user, mascotasEncontradas: user.pet });
})
.catch(error => console.log("Error:", error))
});
//Acaba el Get de Pets


/* GET and Render User's Car list */

router.get("/cars", (req, res, next) => {
  
  const { _id } = req.session.user
  
  User.findById(_id)
.populate("car")
.then((user) => {
  console.log(user)
  res.render("userAssets/cars/carsList", { isSession: req.session.user, carrosRegistrados: user.car });
})
.catch(error => console.log("Error:", error))
});
  


module.exports = router;