const router = require("express").Router();
const Pet = require("../models/Pet.model");


/* GET pet registration screen */
router.get("/pet", (req, res, next) => {
  res.render("register/addPet");
});

router.post("/pet", (req, res) => {
 
  Pet.create(req.body)
  .then(newPet => {
      console.log(newPet)
      res.redirect("/index")
  })
  .catch(err => console.log(err))
})

module.exports = router;
