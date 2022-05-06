// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");
const moment = require("moment")

hbs.registerHelper("fecha", function (fechasSinFormato) {
const fechaFormateada = moment(fechasSinFormato).format("DD/MM/YYYY hh:mm A")
return fechaFormateada
})


hbs.registerHelper("checarTipoAnimal", function (tipo) {
 const resultadoTipo = tipo == "Perro"?"dog":"cat"
 return resultadoTipo   
})

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "pet-pet-rides";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const registerRoutes = require("./routes/register.routes");
app.use("/register", registerRoutes);

const rideRoutes = require("./routes/ride.routes");
app.use("/ride", rideRoutes);

const userAssetsRoutes = require("./routes/userAssets.routes");
app.use("/userAssets", userAssetsRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

// const resultadoTipo = tipo == "Perro"?"Dog":"Cat"          Esta linea fue la culpa del bug que me quebraba el coco