const express = require("express");
const router = express.Router();
const bank = require("../models/bank_model");
const bcrypt = require('bcrypt');
const path = require('path');

const filePath1 = path.join(__dirname, '../public', 'loginsuccessful.html');
const filePath2 = path.join(__dirname, '../public', 'index.html');

router.get("/", function(request,response) {
    response.sendFile(filePath2);
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
                            response.sendFile(filePath1);
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
