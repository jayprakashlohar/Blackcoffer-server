const express = require("express");
const { mongoConnect } = require("../config/database");

require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send({ msg: "Hello Blackcoffer... " });
});

app.listen(PORT, async () => {
  try {
    await mongoConnect;
    console.log("Connect To MongoDb Successfully!");
  } catch (error) {
    console.log(error);
  }
  console.log(`Listing on port ${PORT}`);
});
