const router = require("express").Router();
const canRegisterPet = require("../middleware/canRegisterPet");
const Pet = require("../models/Pet.model");


/* GET pet registration screen */
router.get("/pet", canRegisterPet, (req, res, next) => {
  res.render("register/addPet");
});

router.post("/pet", (req, res) => {
console.log(req.session)
const owner = req.session.user._id

console.log(owner)
  // return res.send("okey")
 
  Pet.create({...req.body, owner})
  .then(newPet => {
      res.redirect("/")
  })
  .catch(err => console.log(err))
})

module.exports = router;
