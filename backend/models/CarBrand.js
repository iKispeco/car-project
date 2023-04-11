const mongoose = require("mongoose");

const carBrandSchema = new mongoose.Schema({
  carId: Number,
  name: String,
  abrv: String,
});

const carModelSchema = new mongoose.Schema({
  makeId: Number,
  name: String,
  abrv: String,
});

module.exports = {
  carBrand: mongoose.model("CarBrand", carBrandSchema),
  carModel: mongoose.model("CarModel", carModelSchema),
};
