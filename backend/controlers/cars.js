const { carBrand } = require("../models/CarBrand");

exports.findCars = async (req, res) => {
  const cars = await carBrand.find();
  res.send(cars);
};

// OPTIONAL if we want to implement INSERT field into our web-app
/* exports.createCar = async (req, res) => {
  const car = new carBrand(req.body);
  await car.save();
  res.send(car);
}; */

exports.findCar = async (req, res) => {
  try {
    const car = await carBrand.find({
      name: new RegExp("^" + req.query.name, "i"),
    });
    res.send(car);
  } catch {
    res.status(404).send({ error: "Car is not found!" });
  }
};

// OPTIONAL if we want to make brands and models in our collection updateable
/* exports.updateCar = async (req, res) => {
  try {
    const car = await carBrand.findById(req.params.id);
    Object.assign(car, req.body);
    car.save();
    res.send(car);
  } catch {
    res.status(404).send({ error: "Car is not found!" });
  }
}; */

// OPTIONAL if we want to implement DELETE option into our web-app
/* exports.deleteCar = async (req, res) => {
  try {
    const car = await carBrand.deleteOne({ _id: req.params.id });
    res.send({ data: true });
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: "Car is not found!" });
  }
}; */
