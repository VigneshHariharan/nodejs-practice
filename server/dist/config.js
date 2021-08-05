"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + "/.env" });
exports.default = {
    JWT_ACCESS_KEY: (_a = process.env.JWT_ACCESS_KEY) !== null && _a !== void 0 ? _a : "",
};
