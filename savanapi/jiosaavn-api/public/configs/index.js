"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const dev_config_1 = require("./dev.config");
const production_config_1 = require("./production.config");
const getConfig = () => {
    if (process.env.NODE_ENV === 'production')
        return production_config_1.productionConfig;
    return dev_config_1.devConfig;
};
exports.getConfig = getConfig;
