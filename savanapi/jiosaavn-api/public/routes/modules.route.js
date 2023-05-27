"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesRoute = void 0;
const express_1 = require("express");
const modules_controller_1 = require("../controllers/modules.controller");
class ModulesRoute {
    path = '/modules';
    router = (0, express_1.Router)();
    modulesController = new modules_controller_1.ModulesController();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.modulesController.browseModules);
    }
}
exports.ModulesRoute = ModulesRoute;
