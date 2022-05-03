const router = require("express").Router();
const canRegisterPet = require("../middleware/canRegisterPet");
const Pet = require("../models/Pet.model");
const Car = require("../models/Car.model")


/* GET pet registration screen */
router.get("/pet", canRegisterPet, (req, res, next) => {
  res.render("register/addPet");
});

router.post("/pet", (req, res) => {
const owner = req.session.user._id

   
  Pet.create({...req.body, owner})
  .then(newPet => {
      res.redirect("/cars/petList")
  })
  .catch(err => console.log(err))
})


/* GET car registration screen */
router.get("/car", canRegisterPet, (req, res, next) => {
  res.render("register/addCar");
});

router.post("/car", (req, res) => {
const owner = req.session.user._id
 
  Car.create({...req.body, owner})
  .then(newCar => {
      res.redirect("/cars/carList")
  })
  .catch(err => console.log(err))
})

module.exports = router;
