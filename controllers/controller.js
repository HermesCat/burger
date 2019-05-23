
var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");


// gets the index page and allows the burgers table to display via the hbsObject
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });   
});

// creates a new burgers via the textarea and pushes that into the database
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.name
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

// updates the devoured boolean value in the database which moves the burger from 
// the left side of the screen to the right
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;
