const { Router } = require("express");
const { Character } = require("../models");

const characterController = Router();

// characterController.post('/test', function(req, res){
//     res.send("Test went through!")
// });

//TODO Character List Route
characterController.get("/", async (req, res) => {
    try {
        const lists = await Character.findAll({
            where: {
                owner_id: req.user.id,
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


// CREATE Character Route
characterController.post('/create', function(request, response) {
    console.log(request.body);
    //  Pulls new character data from input fields to write to DB
    let owner_id = request.user.id; // user id set in validate-session
    let CharName = request.body.Character.charName;
    let CharImageURL = request.body.Character.charImageURL;
    let CharBodyType = request.body.Character.charBodyType;
    let CharHair = request.body.Character.charHair;
    let CharEyeColor = request.body.Character.charEyeColor;
    let CharGender = request.body.Character.charGender;
    let CharAge = request.body.Character.charAge;
    let CharRelationshipStatus = request.body.Character.charRelationshipStatus;
    let CharChildren = request.body.Character.charChildren;
    let CharOccupation = request.body.Character.charOccupation;
    let CharDescription = request.body.Character.charDescription;
    let CharHistory = request.body.Character.charHistory;
    let CharPersonalityType = request.body.Character.charPersonalityType;
    let CharPersonalityPolarOpp = request.body.Character.charPersonalityPolarOpp;
    let CharPersonalityDescription = request.body.Character.charPersonalityDescription;
    let CharPersonalityQuirk = request.body.Character.charPersonalityQuirk;
  
    Character            // add new row to table
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
          //let err = { message: "Failed to create new character" }
        }
      );
  
  });

//Edit Character Route
characterController.put('/edit/:id', function(request, response){
    console.log(request.body);
    let owner_id = request.user.id; // user id set in validate-session
    let CharName = request.body.Character.charName;
    let CharImageURL = request.body.Character.charImageURL;
    let CharBodyType = request.body.Character.charBodyType;
    let CharHair = request.body.Character.charHair;
    let CharEyeColor = request.body.Character.charEyeColor;
    let CharGender = request.body.Character.charGender;
    let CharAge = request.body.Character.charAge;
    let CharRelationshipStatus = request.body.Character.charRelationshipStatus;
    let CharChildren = request.body.Character.charChildren;
    let CharOccupation = request.body.Character.charOccupation;
    let CharDescription = request.body.Character.charDescription;
    let CharHistory = request.body.Character.charHistory;
    let CharPersonalityType = request.body.Character.charPersonalityType;
    let CharPersonalityPolarOpp = request.body.Character.charPersonalityPolarOpp;
    let CharPersonalityDescription = request.body.Character.charPersonalityDescription;
    let CharPersonalityQuirk = request.body.Character.charPersonalityQuirk;

    Character            // add new row to table
      .update({//key :  property (from body of request)
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
    },
    {where: {id: request.params.id}}
    ).then(
        function updateSuccess(updatedChar) {
            response.json({
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
            });
        },
        function createError(err) {             // if not successful
            response.send(500, err.message);           // return an error message
            message: "Failed to update character"
        }
    )
});

// Delete Character Route
characterController.delete('/delete/:id', function (req, res) {
    const data = req.params.id;
    const owner_id = req.user.id;

    Character
    .destroy({
        where: { id: data, owner_id: owner_id}
    }).then (
        function deleteLogSuccess(data){
            res.send("Character deleted successfully")
        },
        function deleteLogError(err){
            res.send(500, err.message);
        }
    ); 
});

module.exports = characterController;