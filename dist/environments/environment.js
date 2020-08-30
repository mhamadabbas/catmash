"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
const environment_dev_1 = require("./environment.dev");
const environment_prod_1 = require("./environment.prod");
const environments = {
    development: environment_dev_1.environment,
    production: environment_prod_1.environment
};
exports.environment = environments[process.env.NODE_ENV || 'development'];
//# sourceMappingURL=environment.js.map