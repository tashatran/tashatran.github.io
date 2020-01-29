const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/api", require("./routes/api-routes"))
require("./routes/html-routes")(app)

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log("App running on port" , PORT);
});