// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var apiRoutes = express.Router();
var userData = require("../data/friends.js");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ===============================================================================
// ROUTING
// ===============================================================================
apiRoutes.post("/api/friends", function(req, res) {
    let newUser = req.body;
    let totUserData = 0;
    let userDataArr = [];
    
    for (let i = 0; i < newUser.scores.length; i++) {
        newUser.score[i] = parseInt(newUser.score[i]);
    }
    userData.push(newUser);

    for (let i = 0; i < userData.length -1; i++) {
        for (var x = 0; x < newUser.score.length; x++) {
            totUserData =+ Math.abs(newUser.score[x] - userData[i].score[j])
        }
        userDataArr.push(totUserData);
    }

    let match = (userDataArr.indexOf(Math.min.apply(Math, totUserData)));
    let topMatch = (userData[match])
    
    res.json(topMatch)
    
});

apiRoutes.get("/api/friends", function(req, res) {
	res.json(userData);
});

module.exports = apiRoutes;


    