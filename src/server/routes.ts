import * as express from "express";
const cheeses = require("./data/cheeses.json");

var fs = require("fs");

const router = express.Router();

router.get("/api/cheeses", (req, res, next) => {
  res.json(cheeses);
});

router.post("/api/addItems", (req, res, next) => {
  const fs = require("fs");
  const items = req.body;
  //   fs.writeFile("./data/purchased.json", JSON.stringify(items), (err) => {
  //     if (err) throw err;
  //     console.log("Users saved!");
  //   });
  res.end();
});

// router.get("/api/purchased", (req, res) => {
//   res.json(purchased);
// });

export default router;
