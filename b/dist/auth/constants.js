"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
require('dotenv').config();
exports.jwtConstants = {
    secret: process.env.JWT_KEY
};
//# sourceMappingURL=constants.js.map