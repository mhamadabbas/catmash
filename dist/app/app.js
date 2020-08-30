"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const cat_router_1 = require("./routers/cat.router");
const staticRoot = __dirname + '/../client';
const app = express();
//BASE MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('', express.static(staticRoot));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
});
// ROUTERS
app.use('/api/cats', cat_router_1.CAT_ROUTER);
exports.default = app;
//# sourceMappingURL=app.js.map