"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sgMail = require('@sendgrid/mail');
const getSGClient = () => {
    sgMail.setApiKey(process.env.SG_KEY);
    return sgMail;
};
exports.default = getSGClient;
//# sourceMappingURL=email.js.map