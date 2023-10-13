const db = require("../database");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const bank = {
    getAllAccounts: function(callback) {
        return db.query("SELECT * FROM users", callback);
    },
    getOneAccount: function(id, callback) {
        return db.query("SELECT * FROM users where User_id=?", [id], callback);
    },
    addAccount: function(newData, callback) {
        bcrypt.hash(newData.Password, saltRounds, function(err, hashedPassword) {
            return db.query("INSERT INTO users(Username,Password,Name,Balance) values(?,?,?,?)",
            [newData.Username,hashedPassword,newData.Name,newData.Balance],callback);
        });
    },
    updateAccount: function(id, newData, callback) {
        bcrypt.hash(newData.Password, saltRounds, function(err, hashedPassword) {
        return db.query("UPDATE users SET Username=?,Password=?,Name=?,Balance=? where User_id=?",
        [newData.Username,hashedPassword,newData.Name,newData.Balance,id],callback);
        });
    },
    deleteAccount: function(id, callback) {
        return db.query("DELETE FROM users where User_id=?",[id],callback);
    },
    login: function(username, callback) {
        return db.query("SELECT Password FROM users where Username=?",[username],callback);
    }
    
};

module.exports = bank;