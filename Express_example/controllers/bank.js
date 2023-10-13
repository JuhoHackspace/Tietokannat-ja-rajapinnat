const express = require("express");
const router = express.Router();
const bank = require("../models/bank_model");

router.get('/', function(request,response) {
    bank.getAllAccounts(function(err, data) {
        if(err) {
            response.json(err);
        }
        else {
            response.json(data);
        }
    });
});
router.get('/:id', function(request,response) {
    bank.getOneAccount(request.params.id, function(err, data) {
        if(err) {
            response.json(err);
        }
        else {
            response.json(data[0]);
        }
    });
});
router.post('/', function(request,response) {
    bank.addAccount(request.body, function(err, data) {
        if(err) {
            response.json(err);
        }
        else {
            response.json(request.body);
        }
    });
});
router.put('/:id', function(request,response) {
    bank.updateAccount(request.params.id, request.body, function(err, data) {
        if(err) {
            response.json(err);
        }
        else {
            response.json(data);
        }
    });
});
router.delete('/:id', function(request,response) {
    bank.deleteAccount(request.params.id, function(err,data) {
        if(err) {
            response.json(err);
        }
        else {
            response.json(data);
        }
    });
});

module.exports = router;