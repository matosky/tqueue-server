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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_2 = require("mongoose");
dotenv_1.default.config();
const port = process.env.MONGO_PORT;
const dbName = process.env.DB_NAME;
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Attempt to connect to MongoDB
        yield mongoose_1.default.connect(`mongodb://localhost:${port}/${dbName}`);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        // Handle connection errors
        throw new mongoose_2.Error("Could not connect to DB");
    }
});
exports.connectToDb = connectToDb;
