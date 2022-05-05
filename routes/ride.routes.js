const router = require("express").Router();
const Ride = require("../models/Ride.model")
const User = require("../models/User.model");
const Car = require("../models/Car.model");
const Pet = require("../models/Pet.model");



/* GET add ride page */
router.get("/create", (req, res, next) => {
const owner = req.session?.user?._id
if (!owner) {
  res.redirect("/auth/login")
} else {
  const promises = [Car.find({owner}), Pet.find({owner})]
  Promise.all(promises)
  .then(([cars, pets]) => {
    res.render("ride/createRide", { isSession: req.session.user, cars, pets });
  })
  .catch((err) => console.log(err))
}});




// Create Ride
router.post("/create", (req, res) => {
  const driver = req.session.user._id
  
  Ride.create({...req.body, driver})
    .then(newRide => {
      return Ride.findByIdAndUpdate(newRide, {driver: driver})
    })
    .then(newRide => {
      return User.findByIdAndUpdate(driver, {$push: {rides: newRide}})
    })
    .then(() => {
      res.redirect("/ride/mine")
    
    })
    .catch(err => console.log(err))
  })
  
  
 /* GET search ride page */
 router.get("/search", (req, res, next) => {
  Ride.find()
  .populate("car")
  .populate("driver")
  .then((rides) => {
    console.log(rides)
    res.render("ride/searchRide", { isSession: req.session.user, rides})
  })
  .catch((err)=>console.log(err))
  });
  


/* GET my rides page */
router.get("/mine", (req, res, next) => {
  const { _id } = req.session.user

  User.findById(_id)
  .then((user) => {
    
    const promises = user.rides.map((rideX) => {
      return Ride.findById(rideX)
    })
    return Promise.all(promises)
  })
  .then(viajesEncontrados => {
  res.render("ride/myRides", { isSession: req.session.user, viajesEncontrados });
  })
  .catch(error => console.log("Error:", error))
  });



// Post To Filter Rides




// Post Passenger Book Seat



// Logic
// if passenger travels 1 Mini Dog
// (2 Available Seat for Mini || 1 Available Seat for Small  || 1 Available Seat for Medium) && 0 Available Seat for Big

// if passenger travels 1 Sm Dog
// (1 Available Seat for Mini || 1 Available Seat for Small || 1 Available Seat for Medium) && 0 Available Seat for Big

// if passenger travels 1 Med Dog
// (1 Available Seat for Mini || 1 Available Seat for Small || 1 Available Seat for Medium) && 0 Available Seat for Big

// if passenger travels 1 G Dog
// No available Seat









module.exports = router;