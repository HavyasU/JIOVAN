"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRoute = void 0;
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
class HomeRoute {
    path = '/';
    router = (0, express_1.Router)();
    homeController = new home_controller_1.HomeController();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.homeController.home);
    }
}
exports.HomeRoute = HomeRoute;
