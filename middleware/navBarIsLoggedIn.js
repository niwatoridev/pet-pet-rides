module.exports = (req, res, next) => {
  // checks if the user is logged in when trying to access a specific page
  console.log(req.session)
  if (!req.session.user) {
  }
  
  next();
};
