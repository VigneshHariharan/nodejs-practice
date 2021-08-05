"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = exports.utilRoutes = exports.resourceRoutes = exports.userRoutes = exports.notesRoutes = void 0;
var notes_1 = require("./notes/notes");
Object.defineProperty(exports, "notesRoutes", { enumerable: true, get: function () { return __importDefault(notes_1).default; } });
var userController_1 = require("./users/userController");
Object.defineProperty(exports, "userRoutes", { enumerable: true, get: function () { return __importDefault(userController_1).default; } });
var resourceController_1 = require("./resources/resourceController");
Object.defineProperty(exports, "resourceRoutes", { enumerable: true, get: function () { return __importDefault(resourceController_1).default; } });
var ocr_1 = require("./utils/ocr");
Object.defineProperty(exports, "utilRoutes", { enumerable: true, get: function () { return __importDefault(ocr_1).default; } });
var auth_1 = require("./auth/auth");
Object.defineProperty(exports, "authRoutes", { enumerable: true, get: function () { return __importDefault(auth_1).default; } });
