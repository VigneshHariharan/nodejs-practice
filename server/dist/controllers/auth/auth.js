"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var jsonwebtoken_1 = require("jsonwebtoken");
var router = express_1.Router();
var posts = [
    {
        username: "Vignesh",
        title: "React native",
    },
    {
        username: "JoJo",
        title: "Bizzare Adventure",
    },
];
router.get("/posts", function (req, res) {
    res.json(posts);
});
router.post("/signin", function (req, res) {
    var _a;
    var username = req.body.username;
    console.log("process env", process.env);
    var accessToken = jsonwebtoken_1.sign(username, (_a = process.env.JWT_ACCESS_KEY) !== null && _a !== void 0 ? _a : "");
    res.json({ accessToken: accessToken });
});
exports.default = router;
