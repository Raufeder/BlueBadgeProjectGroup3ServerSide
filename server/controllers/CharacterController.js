const { Router } = require("express");
const { Character } = require("../models");

const characterController = Router();

characterController.post('/test', function(req, res){
    res.send("Test went through!")
});


// CREATE Character Route
router.post('/create', function(request, response) {

    //  Pulls new character data from input fields to write to DB
    let owner_id = request.User.id; // user id set in validate-session
    let CharName = request.body.Character.charName;
    let CharImageURL = request.body.Character.charName;
    let CharBodyType = request.body.Character.charBodyType;
    let CharHair = request.body.Character.charHair;
    let CharEyeColor = request.body.Character.charEyeColor;
    let CharGender = request.body.Character.charGender;
    let CharAge = request.body.Character.charAge;
    let CharRelationshipStatus = request.body.Character.charRelationshipsStatus;
    let CharChildren = request.body.Character.charChildren;
    let CharOccupation = request.body.Character.charOccupation;
    let CharDescription = request.body.Character.charDescription;
    let CharHistory = request.body.Character.charHistory;
    let CharPersonalityType = request.body.Character.charPersonalityType;
    let CharPersonalityPolarOpp = request.body.Character.charPersonalityPolarOpp;
    let CharPersonalityDescription = request.body.Character.charPersonalityDescription;
    let CharPersonalityQuirk = request.body.Character.charPersonalityQuirk;
  
    CharacterModel            // add new row to table
      .create({//key :  property (from body of request)
        owner_id: owner_id,
        CharName: CharName,
        CharImageURL: CharImageURL,
        CharBodyType: CharBodyType,
        CharHair: CharHair,
        CharEyeColor: CharEyeColor,
        CharGender: CharGender,
        CharAge: CharAge,
        CharRelationshipStatus: CharRelationshipStatus,
        CharChildren: CharChildren,
        CharOccupation: CharOccupation,
        CharDescription: CharDescription,
        CharHistory: CharHistory,
        CharPersonalityType: CharPersonalityType,
        CharPersonalityPolarOpp: CharPersonalityPolarOpp,
        CharPersonalityDescription: CharPersonalityDescription,
        CharPersonalityQuirk: CharPersonalityQuirk
    })
      .then(            // when complete
        function createSuccess(newCharName) {   // if it was successful
          response.json({                       // return a JSON object
            CharName: CharName                  // of the new char's name
          });
        },
        function createError(err) {             // if not successful
          response.send(500, err.message);           // return an error message
        }
      );
  
  });






/*
TODO Edit Character Route
TODO Delete Character Route
TODO Character List Route
TODO 
*/

module.exports = characterController;