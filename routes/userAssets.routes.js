const router = require("express").Router();
const Car = require("../models/Car.model");
const User = require("../models/User.model");


/* GET and Render User's Pet list  */
router.get("/pets", (req, res, next) => {
  res.render("userAssets/pets/petsList", { isSession: req.session.user });
});




/* GET and Render User's Car list */

router.get("/cars", (req, res, next) => {
  
  const { _id } = req.session.user
  
  User.findById(_id)
  .then((user)  => {
      console.log(user)
      const promises = user.car.map((carX) => {
          return Car.findById(carX)
      })
         console.log(promises)  
         return Promise.all(promises)  
    })
    .then(carrosRegistrados => { 
      res.render("userAssets/cars/carsList", { isSession: req.session.user, carrosRegistrados });
      // console.log(carrosRegistrados)
    })
    .catch(error => console.log("Error:", error))
  })
  


module.exports = router;