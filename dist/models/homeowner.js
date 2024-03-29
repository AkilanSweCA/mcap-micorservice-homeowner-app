"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Homeowner = exports.HomeownerSchema = void 0;
const mongoose_1 = require("mongoose");
// Homeowner model
exports.HomeownerSchema = new mongoose_1.Schema({
    fname: String,
    lname: String,
    dob: Date,
    age: Number,
    address: String,
    coordinates: { type: [Number], index: "2dsphere" },
});
exports.Homeowner = (0, mongoose_1.model)("Homeowner", exports.HomeownerSchema);
