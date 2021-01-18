const express = require("express");
const cors = require("cors");

const port = 8080;
const host = "0.0.0.0";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({
    dota_hero: ["Storm", "Pango", "Puck", "Pugna", "Juggernaut"],
  });
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);
