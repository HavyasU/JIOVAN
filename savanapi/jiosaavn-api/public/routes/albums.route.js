"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumsRoute = void 0;
const express_1 = require("express");
const albums_controller_1 = require("../controllers/albums.controller");
const validation_helper_1 = require("../helpers/validation.helper");
class AlbumsRoute {
    path = '/albums';
    router = (0, express_1.Router)();
    albumsController = new albums_controller_1.AlbumsController();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, validation_helper_1.albumsSchema, this.albumsController.albumDetails);
    }
}
exports.AlbumsRoute = AlbumsRoute;
