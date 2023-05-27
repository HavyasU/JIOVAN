"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LyricsService = void 0;
const http_exception_1 = require("../exceptions/http.exception");
const payload_service_1 = require("../services/payload.service");
class LyricsService extends payload_service_1.PayloadService {
    songLyrics = async (songId) => {
        const response = await this.http(this.endpoints.lyrics, true, { lyrics_id: songId });
        if (!response.lyrics)
            throw new http_exception_1.HttpExceptionError(404, 'lyrics not found');
        const lyrics = this.lyricsPayload(response);
        return lyrics;
    };
}
exports.LyricsService = LyricsService;
