// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
let path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================
let express = require("express");
let htmlRoutes = express.Router();


  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  htmlRoutes.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  htmlRoutes.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  htmlRoutes.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


module.exports = htmlRoutes;


