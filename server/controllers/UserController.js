const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const { User } = require('../models');
const { UniqueConstraintError } = require('sequelize/lib/errors');

const userController = Router();

userController.post('/test', function(req, res){
    res.send("Test went through!")
});

//TODO Register Route
// TODO Login Route
// TODO Delete Account Route
// TODO Change password Route

module.exports = userController;