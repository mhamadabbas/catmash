"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAT_ROUTER = void 0;
const express = require("express");
const cat_controller_1 = require("../controllers/cat.controller");
exports.CAT_ROUTER = express
    .Router()
    .put('/vote/:id', cat_controller_1.CatController.vote)
    .get('/random', cat_controller_1.CatController.getRandom)
    .get('/', cat_controller_1.CatController.getAll);
//# sourceMappingURL=cat.router.js.map