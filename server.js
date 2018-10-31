// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

let express = require("express");
let bodyParser = require("body-parser");

let path = require("path");

let htmlRoutes = require('./app/routing/htmlRoutes.js')
let apiRoutes = require('./app/routing/apiRoutes.js')
let userData = require('./app/data/friends.js')


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
let app = express();
let PORT = process.env.PORT || 3000;



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', htmlRoutes)
app.use('/survey', htmlRoutes);
app.post("/api/friends", apiRoutes);
app.get("/api/friends", apiRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});