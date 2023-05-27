"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LyricsRoute = void 0;
const express_1 = require("express");
const lyrics_controller_1 = require("../controllers/lyrics.controller");
const validation_helper_1 = require("../helpers/validation.helper");
class LyricsRoute {
    path = '/lyrics';
    router = (0, express_1.Router)();
    lyricsController = new lyrics_controller_1.LyricsController();
    constructor() {
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, validation_helper_1.idSchema, this.lyricsController.lyricsDetails);
    }
}
exports.LyricsRoute = LyricsRoute;
