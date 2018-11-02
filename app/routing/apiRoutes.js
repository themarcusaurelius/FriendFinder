// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
let apiRoutes = express.Router();
let userData = require("../data/friends.js");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ===============================================================================
// ROUTING
// ===============================================================================
apiRoutes.post("/api/friends", function(req, res) {
    let newUser = req.body;
    let totUserData = 0;
    let userDataArr = [];
    
    for (let i = 0; i < userData.length -1; i++) {
        for (var x = 0; x < newUser.score.length; x++) {
            totUserData =+ Math.abs(parseInt(newUser.score[x]) - userData[i].score[x])
        }
        userDataArr.push(totUserData);
    }
    
    // Math.min.apply(Math, array) Find the minimum in the second argument (has to be an array)
    let match = (userDataArr.indexOf(Math.min.apply(null, userDataArr)));
    let topMatch = (userData[match])
    
    userData.push(newUser);
    res.json(topMatch)
    
});

apiRoutes.get("/api/friends", function(req, res) {
	res.json(userData);
});

module.exports = apiRoutes;


    