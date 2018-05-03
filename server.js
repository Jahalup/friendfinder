// Node packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Creating an express server
var app = express();

// Choosing an initial port
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './app/public')));

// Data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Server listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });


