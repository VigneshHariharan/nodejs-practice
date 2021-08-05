"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResourceshow = exports.deleteResource = exports.updateResource = exports.addResource = exports.getResourcesIndex = void 0;
var connection_1 = require("../connection");
var getResourcesIndex = function () { return __awaiter(void 0, void 0, void 0, function () {
    var resources;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, connection_1.dbQuery("select id,title, parent_id, description, photo, created_by from resources")];
            case 1:
                resources = _a.sent();
                return [2 /*return*/, resources];
        }
    });
}); };
exports.getResourcesIndex = getResourcesIndex;
var addResource = function (resources) { return __awaiter(void 0, void 0, void 0, function () {
    var columnsName, fieldValues, resourcesQuery;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                columnsName = Object.keys(resources);
                fieldValues = Object.values(resources);
                return [4 /*yield*/, connection_1.dbQuery("insert into resources (??) values(?);", [columnsName, fieldValues])];
            case 1:
                resourcesQuery = _a.sent();
                return [2 /*return*/, resourcesQuery];
        }
    });
}); };
exports.addResource = addResource;
var updateResource = function (resources, id) { return __awaiter(void 0, void 0, void 0, function () {
    var columnsName, fieldValues, updateQuery, col, resourcesQuery;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                columnsName = Object.keys(resources);
                fieldValues = Object.values(resources);
                updateQuery = "";
                for (col = 0; col < columnsName.length; col++) {
                    updateQuery = " " + columnsName[col] + "=" + fieldValues[col] + " ";
                }
                return [4 /*yield*/, connection_1.dbQuery("update resources set " + updateQuery + " where id=(?) ;", [id])];
            case 1:
                resourcesQuery = _a.sent();
                return [2 /*return*/, resourcesQuery];
        }
    });
}); };
exports.updateResource = updateResource;
var deleteResource = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var resources, updateResourceRelations;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, connection_1.dbQuery("update resources set parent_id=0 where parent_id=(?)", [id])];
            case 1:
                updateResourceRelations = _a.sent();
                return [4 /*yield*/, connection_1.dbQuery("delete into resources where id = (?)", [id])];
            case 2:
                resources = _a.sent();
                return [2 /*return*/, resources];
        }
    });
}); };
exports.deleteResource = deleteResource;
var getResourceshow = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); };
exports.getResourceshow = getResourceshow;
