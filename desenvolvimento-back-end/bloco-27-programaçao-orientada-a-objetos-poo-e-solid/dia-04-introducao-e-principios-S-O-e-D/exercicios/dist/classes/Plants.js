"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = __importDefault(require("fs/promises"));
var crypto_1 = require("crypto");
var path_1 = __importDefault(require("path"));
var FileType;
(function (FileType) {
    FileType[FileType["Plants"] = 0] = "Plants";
    FileType[FileType["OpsInfo"] = 1] = "OpsInfo";
})(FileType || (FileType = {}));
var plantsNeedSun = function (id) { return function (plant) {
    return plant.id === id
        && plant.needsSun
        && (!plant.specialCare
            || plant.specialCare.waterFrequency > 2);
}; };
var Plants = /** @class */ (function () {
    function Plants() {
        this.PLANTS_PATH = path_1.default.join(__dirname, 'plantsData.json');
        this.OPS_INFO_PATH = path_1.default.join(__dirname, 'opsInfo.json');
    }
    Plants.prototype.updateOpsInfo = function (incrementAmount) {
        if (incrementAmount === void 0) { incrementAmount = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var opsInfoRaw, opsInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, promises_1.default.readFile(this.OPS_INFO_PATH, { encoding: 'utf8' })];
                    case 1:
                        opsInfoRaw = _a.sent();
                        opsInfo = JSON.parse(opsInfoRaw);
                        opsInfo.createdPlants += incrementAmount;
                        this.saveFile(FileType.OpsInfo, opsInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Plants.prototype.saveFile = function (type, data) {
        return __awaiter(this, void 0, void 0, function () {
            var filePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (type === FileType.Plants)
                            filePath = this.PLANTS_PATH;
                        else if (type === FileType.OpsInfo)
                            filePath = this.OPS_INFO_PATH;
                        else
                            return [2 /*return*/, null];
                        return [4 /*yield*/, promises_1.default.writeFile(filePath, JSON.stringify(data))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Plants.initPlant = function (plant) {
        var id = plant.id, breed = plant.breed, needsSun = plant.needsSun, origin = plant.origin, specialCare = plant.specialCare, size = plant.size;
        var waterFrequency = needsSun
            ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
            : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
        var newPlant = {
            id: id,
            breed: breed,
            needsSun: needsSun,
            origin: origin,
            specialCare: __assign(__assign({}, specialCare), { waterFrequency: waterFrequency }),
            size: size,
        };
        return newPlant;
    };
    Plants.prototype.getPlants = function () {
        return __awaiter(this, void 0, void 0, function () {
            var plantsRaw, plants;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, promises_1.default.readFile(this.PLANTS_PATH, { encoding: 'utf8' })];
                    case 1:
                        plantsRaw = _a.sent();
                        plants = JSON.parse(plantsRaw);
                        return [2 /*return*/, plants];
                }
            });
        });
    };
    Plants.prototype.getPlantById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var plants, plantById;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlants()];
                    case 1:
                        plants = _a.sent();
                        plantById = plants.find(function (plant) { return plant.id === id; });
                        if (!plantById)
                            return [2 /*return*/, null];
                        return [2 /*return*/, plantById];
                }
            });
        });
    };
    Plants.prototype.removePlantById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var plants, removedPlant, newPlants;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlants()];
                    case 1:
                        plants = _a.sent();
                        removedPlant = plants.find(function (plant) { return plant.id === id; });
                        if (!removedPlant)
                            return [2 /*return*/, null];
                        newPlants = plants.filter(function (plant) { return plant.id !== id; });
                        this.saveFile(FileType.Plants, newPlants);
                        return [4 /*yield*/, this.updateOpsInfo(-1)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, removedPlant];
                }
            });
        });
    };
    Plants.prototype.getPlantsThatNeedsSunWithId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var plants, filteredPlants;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlants()];
                    case 1:
                        plants = _a.sent();
                        filteredPlants = plants.filter(plantsNeedSun(id));
                        return [2 /*return*/, filteredPlants];
                }
            });
        });
    };
    Plants.prototype.editPlant = function (plantId, newPlant) {
        return __awaiter(this, void 0, void 0, function () {
            var plants, updatedPlants;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlants()];
                    case 1:
                        plants = _a.sent();
                        updatedPlants = plants.map(function (plant) {
                            if (plant.id === plantId)
                                return __assign(__assign({}, newPlant), { id: plant.id });
                            return plant;
                        });
                        this.saveFile(FileType.Plants, updatedPlants);
                        return [2 /*return*/, newPlant];
                }
            });
        });
    };
    Plants.prototype.savePlant = function (plant) {
        return __awaiter(this, void 0, void 0, function () {
            var plants, newPlant;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlants()];
                    case 1:
                        plants = _a.sent();
                        newPlant = Plants.initPlant(__assign(__assign({}, plant), { id: (0, crypto_1.randomUUID)() }));
                        plants.push(newPlant);
                        this.saveFile(FileType.Plants, plants);
                        return [4 /*yield*/, this.updateOpsInfo(1)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newPlant];
                }
            });
        });
    };
    return Plants;
}());
exports.default = Plants;
