const express = require("express");
const app = express();
const PORT = 8880;

app.use(express.static("./dist"));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
