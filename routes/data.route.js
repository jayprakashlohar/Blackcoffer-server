const express = require("express");
const dataRouter = express.Router();

const { getAllData } = require("../controllers/datacontroller");

dataRouter.route("/").get(getAllData);

module.exports = dataRouter;
