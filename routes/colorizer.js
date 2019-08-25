const express = require("express");

const router = express.Router();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

router.get("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).send("<h1 style='color:rgb(255, 99, 71)'>Welcome</h1>");
});

router.post("/generate", (req, res) => {
  const output = req.body.data.split(" ").map(word => {
    const r = getRandomInt(255);
    const g = getRandomInt(255);
    const b = getRandomInt(255);
    return (
      `<span style='color:rgb(${r}, ${g}, ${b}); font-size:30px'>` +
      word +
      "</span>"
    );
  });
  res.status(200).send(output.join(" "));
});

module.exports = router;
