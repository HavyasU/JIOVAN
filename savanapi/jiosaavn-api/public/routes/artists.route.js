"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsRoute = void 0;
const express_1 = require("express");
const validation_helper_1 = require("../helpers/validation.helper");
const artists_controller_1 = require("../controllers/artists.controller");
class ArtistsRoute {
    path = '/artists';
    router = (0, express_1.Router)();
    artistsController = new artists_controller_1.ArtistsController();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, validation_helper_1.artistsSchema, this.artistsController.artistDetails);
        this.router.get(`${this.path}/:artistId/albums`, validation_helper_1.artistSongsAndAlbumsSchema, this.artistsController.artistAblums);
        this.router.get(`${this.path}/:artistId/songs`, validation_helper_1.artistSongsAndAlbumsSchema, this.artistsController.artistSongs);
        this.router.get(`${this.path}/:artistId/recommendations/:songId`, validation_helper_1.artistRecommendedSongsSchema, this.artistsController.artistTopSongs);
    }
}
exports.ArtistsRoute = ArtistsRoute;
