const express = require("express");
const routes = require("./routes/api");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://igorkispeco:IK23091987@raptor.dqmbqba.mongodb.net/carVendor",
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();

    // CORS policy
    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      next();
    });

    app.use(express.json());

    // initialize routes
    app.use(routes);

    app.listen(8000, () => {
      console.log("Server je startao na portu 8000...");
    });
  })
  .catch(() => {
    console.log("DB connection failed");
  });
