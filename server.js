const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

app.get("/service1", (req, res) => {
  res.send("Connected to service 1");
});

app.listen(PORT, () => {
  console.log(`Service 1 Running on ${PORT}`);
});
