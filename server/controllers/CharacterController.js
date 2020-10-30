const { Router } = require("express");
const { Character } = require("../models");

const characterController = Router();

characterController.post('/test', function(req, res){
    res.send("Test went through!")
});

//TODO Character List Route
characterController.get("/", async (req, res) => {
    try {
        const lists = await Character.findAll({
            where: {
                createdBy: req.user.id,
            },
        });
        if (lists) {
            res.status(200).json({
                results: lists
            });
        } else {
            res.status(404).json({
                message: "No lists found for user",
            });
        }
    } catch (e) {
        res.status(500).message({
            message: "Failed to retrieve lists for user",
        });
    }
});


/*
TODO Create Character Route
TODO Edit Character Route
TODO Delete Character Route
*/

module.exports = characterController;