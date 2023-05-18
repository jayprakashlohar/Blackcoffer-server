const { DataModel } = require("../models/data.model");

async function getAllData(req, res) {
  const query = req.query;
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;

    const data = await DataModel.find({})
      .skip(page * limit)
      .limit(limit);

    const total = await DataModel.countDocuments();

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      data,
    };
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: true, message: "Internal Server Error" });
  }
}

module.exports = { getAllData };
