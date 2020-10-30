const { DataTypes } = require('sequelize');
const db = require('../db');

//  Note: an "//R" indicates that the field has an initially generated random option

const Character = db.define('character', {
    owner_id: {                     // user id
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CharName: {                     //R initially a pre-generated first & last name w/ middle initial
      type: DataTypes.STRING(60),
      allowNull: false
    },
    CharImageURL: {                 // URL for user uploaded image of character
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CharBodyType: {                 //R one/two word description of body
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CharHair: {                     //R primarily a description of hair length, texture and color (specific)
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CharEyeColor: {                 //R eye color; specific version of black, blue, brown, gray, green, violet
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CharGender: {                   // entirely user entered
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CharAge: {                      //R basic description of an age categorey, NOT a numeric value
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CharRelationshipStatus: {       //R descriptive term/phrase for relationship status
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CharChildren: {                 //R a numeric value and possibly description of status (expecting, planning, etc)
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CharOccupation: {               // entirely user entered - AT THIS TIME
      type: DataTypes.STRING(60),
      allowNull: true
    },
    CharDescription: {              // entirely user entered (starting description of field purpose provided)
      type: DataTypes.STRING(6000), // roughly two pages of typed text
      allowNull: true
    },
    CharHistory: {                  // entirely user entered (starting description of field purpose provided)
      type: DataTypes.STRING(15000),// roughly five pages of typed text
      allowNull: true
    },
    CharPersonalityType: {          //R concatenated field of Myers-Briggs or DiSC type
      type: DataTypes.STRING(800),  // ~10% over the longest Myers-Brigg description
      allowNull: true
    },
    CharPersonalityPolarOpp: {      //R one/two-word descriptor having a polar opposite (e.g. friendly/unfriendly)
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CharPersonalityDescription: {   //R one/two-word stand-out descriptor (e.g. calm, draconian, stoic, funny)
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CharPersonalityQuirk: {         //R unusual/uncommon trait or quirk (e.g. goth, still wears a Swatch, eats butter)
      type: DataTypes.STRING(100),  // generous space for a short description; longer should go in Personality
      allowNull: true
    }

  });  // end of const Character

module.exports = Character