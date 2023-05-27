"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRoute = void 0;
const express_1 = require("express");
const validation_helper_1 = require("../helpers/validation.helper");
const search_controller_1 = require("../controllers/search.controller");
class SearchRoute {
    path = '/search';
    router = (0, express_1.Router)();
    searchController = new search_controller_1.SearchController();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/all`, this.searchController.searchAll);
        this.router.get(`${this.path}/songs`, validation_helper_1.searchSchema, this.searchController.searchSongs);
        this.router.get(`${this.path}/albums`, validation_helper_1.searchSchema, this.searchController.searchAlbums);
        this.router.get(`${this.path}/playlists`, validation_helper_1.searchSchema, this.searchController.searchPlaylists);
        this.router.get(`${this.path}/artists`, validation_helper_1.searchSchema, this.searchController.searchArtists);
    }
}
exports.SearchRoute = SearchRoute;
