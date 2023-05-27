"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistsRoute = void 0;
const express_1 = require("express");
const validation_helper_1 = require("../helpers/validation.helper");
const playlists_controller_1 = require("../controllers/playlists.controller");
class PlaylistsRoute {
    path = '/playlists';
    router = (0, express_1.Router)();
    playlistsController = new playlists_controller_1.PlaylistsController();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, validation_helper_1.idSchema, this.playlistsController.playlistDetails);
    }
}
exports.PlaylistsRoute = PlaylistsRoute;
