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
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./config"));
const username = config_1.default.development.username;
const password = config_1.default.development.password;
const dbName = config_1.default.development.database;
const host = config_1.default.development.host;
const port = process.env.PG_PORT || 5432;
const dialect = config_1.default.development.dialect;
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: host,
    port: port,
    dialect: dialect,
    protocol: 'postgres',
    logging: false,
});
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database', error);
        throw new Error('Unable to connect to the database');
    }
});
exports.default = connectToDb;
