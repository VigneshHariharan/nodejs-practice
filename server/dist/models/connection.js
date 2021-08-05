"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbQuery = exports.database = exports.connection = void 0;
var mysql_1 = require("mysql");
exports.connection = mysql_1.createConnection({
    user: "vignesh",
    password: "learnyst",
    database: "nemo",
});
exports.connection.connect();
exports.database = exports.connection;
var dbQuery = function (query, args) {
    return new Promise(function (resolve, reject) {
        exports.connection.query(query, args, function (error, results, fields) {
            if (error) {
                reject(error);
            }
            resolve({ results: results, fields: fields });
        });
    });
};
exports.dbQuery = dbQuery;
