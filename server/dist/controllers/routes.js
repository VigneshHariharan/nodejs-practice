"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedsRoutes = exports.flashcardsRoutes = exports.authRoutes = exports.utilRoutes = exports.userRoutes = void 0;
var userController_1 = require("./users/userController");
Object.defineProperty(exports, "userRoutes", { enumerable: true, get: function () { return __importDefault(userController_1).default; } });
var ocr_1 = require("./utils/ocr");
Object.defineProperty(exports, "utilRoutes", { enumerable: true, get: function () { return __importDefault(ocr_1).default; } });
var auth_1 = require("./auth/auth");
Object.defineProperty(exports, "authRoutes", { enumerable: true, get: function () { return __importDefault(auth_1).default; } });
var flashcardsController_1 = require("./flashcards/flashcardsController");
Object.defineProperty(exports, "flashcardsRoutes", { enumerable: true, get: function () { return __importDefault(flashcardsController_1).default; } });
var feedController_1 = require("./feeds/feedController");
Object.defineProperty(exports, "feedsRoutes", { enumerable: true, get: function () { return __importDefault(feedController_1).default; } });
