"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonObject = exports.getStoredUser = exports.storeUser = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const storeUser = (phone, user) => {
    const data = (0, exports.getJsonObject)('configs/storage.json');
    let i = 0;
    user.phone = phone;
    for (; i < data.users.length; i++) {
        if (data.users[i].phone === phone) {
            data.users[i] = user;
            break;
        }
    }
    if (i === data.users.length) {
        data.users.push(user);
    }
    fs_1.default.writeFileSync(path_1.default.join(__dirname, '../configs/storage.json'), JSON.stringify(data), 'utf8');
    return data.users;
};
exports.storeUser = storeUser;
const getStoredUser = (phone) => {
    const data = (0, exports.getJsonObject)('configs/storage.json').users;
    for (let i = 0; i < data.length; i++) {
        if (data[i].phone === phone) {
            return JSON.parse(JSON.stringify(data[i]));
        }
    }
    return null;
};
exports.getStoredUser = getStoredUser;
const getJsonObject = (fileURL) => {
    return JSON.parseJSON(fs_1.default.readFileSync(path_1.default.join(__dirname, '../' + fileURL), 'utf8'));
};
exports.getJsonObject = getJsonObject;
