"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const mongoose_1 = require("mongoose");
const CAT_SCHEMA = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    vote: {
        type: Number,
        required: true,
        default: 0,
    },
});
exports.Cat = mongoose_1.model('Cat', CAT_SCHEMA);
//# sourceMappingURL=cat.model.js.map