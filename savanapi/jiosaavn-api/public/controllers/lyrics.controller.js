"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LyricsController = void 0;
const constants_1 = require("../constants");
const lyrics_service_1 = require("../services/lyrics.service");
class LyricsController {
    lyricsService;
    constructor() {
        this.lyricsService = new lyrics_service_1.LyricsService();
    }
    lyricsDetails = async (req, res, next) => {
        try {
            const { id } = req.query;
            const result = await this.lyricsService.songLyrics(id);
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.LyricsController = LyricsController;
