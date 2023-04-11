const express = require("express");
const router = express.Router();

const carController = require("../controlers/cars");
const modelController = require("../controlers/models");

// BRAND ROUTER

// get a list of cars from DB
router.get("/cars", carController.findCars);

// get a single car from DB (by ID)
router.get("/cars/search", carController.findCar);

// add a new car brand in DB
/* router.post("/cars", carController.createCar); */

//update car in DB (one car)
/* router.patch("/cars/:id", carController.updateCar); */

// delete car from DB
/* router.delete("/cars/:id", carController.deleteCar); */

// MODEL ROUTER

// get list of models
router.get("/models", modelController.findModels);

// get model by search criteria
router.get("/models/search", modelController.findModel);

// add a new model of a car in DB
/* router.post("/models", modelController.createModel); */

module.exports = router;
