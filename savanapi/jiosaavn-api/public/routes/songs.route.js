"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsRoute = void 0;
const express_1 = require("express");
const songs_controller_1 = require("../controllers/songs.controller");
const validation_helper_1 = require("../helpers/validation.helper");
class SongsRoute {
    path = '/songs';
    router = (0, express_1.Router)();
    songsController = new songs_controller_1.SongsController();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, validation_helper_1.songsSchema, this.songsController.songDetails);
    }
}
exports.SongsRoute = SongsRoute;
