const { carModel } = require("../models/CarBrand");

exports.findModels = async (req, res) => {
  const models = await carModel.find();
  res.send(models);
};

exports.findModel = async (req, res) => {
  const models = await carModel.find({
    abrv: new RegExp("^" + req.query.name, "i"),
  });
  res.send(models);
};

exports.createModel = async (req, res) => {
  const model = new carModel(req.body);
  await model.save();
  res.send(model);
};
