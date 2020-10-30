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
userController.post('/register', function(req, res) {
    let username = req.body.user.username;
    let password = req.body.user.password;

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(password, 12)
    }).then(
        function createSuccess(user) {
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET,
                {expiresIn: 60*60*24});

                res.json({
                    user: user,
                    message: 'User registered',
                    sessionToken: token
                });
        },
        function createError(err) {
            if (err instanceof UniqueConstraintError) {
                res.status(409).json({
                    message: 'Username already in use.'
                });
            } else {
                res.status(500).json({
                    message: 'Failed to register user'
                });
            }
        }
    );
});  

// TODO Login Route
userController.post('/login', function(req, res) {
    User.findOne( { where: { username: req.body.user.username } } ).then(

        function(user) {
            if (user) {
                console.log(user);
                bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
                    if (matches) {
                        var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        res.json({
                            user: user,
                            message: "Successful Login!",
                            sessionToken: token
                        });
                    }else {
                        res.status(502).send({ error: "you failed haha!"});
                    }
                });
            } else {
                res.status(500).send({ error: "failed to authenticate"});
            }
        },
    function (err) {
        res.status(501).send({ error: "you failed, haha!!" });
    }
  );
});


// TODO Delete Account Route
// TODO Change password Route

module.exports = userController;