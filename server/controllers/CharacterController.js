const { Router } = require("express");
const { Character } = require("../models");

const characterController = Router();

characterController.post('/test', function(req, res){
    res.send("Test went through!")
});
/*
TODO Create Character Route
TODO Edit Character Route
TODO Delete Character Route
TODO Character List Route
TODO 
*/

module.exports = characterController;