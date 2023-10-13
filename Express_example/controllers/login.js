const express = require("express");
const router = express.Router();
const bank = require("../models/bank_model");
const bcrypt = require('bcrypt');

router.get("/", function(request,response) {
    response.sendFile("C:/Users/juhoh/Koulutehtavat/Tietokannat ja rajapinnat/Express_example/public/index.html");
});

router.post('/', function(request,response) {
    if(request.body.username && request.body.password){
        const username = request.body.username;
        const password = request.body.password;
           bank.login(username, function(dbError, dbResult) {
                if(dbError) {
                   response.json(dbError);
                }
                else {
                    if(dbResult.length > 0) {
                        bcrypt.compare(password,dbResult[0].Password, function(err,compareResult) {
                        if(compareResult) {
                            console.log("succes");
                            response.sendFile("C:/Users/juhoh/Koulutehtavat/Tietokannat ja rajapinnat/Express_example/public/loginsuccesful.html");
                        }
                        else {
                            console.log("wrong password");
                            response.send(false);
                        }			
                        }
                        );
                    }
                    else {
                        console.log("user does not exists");
                        response.send(false);
                    }
                }
           });
    }
    else {
        console.log("username or password missing");
        response.send(false);
    }
});

module.exports = router;
