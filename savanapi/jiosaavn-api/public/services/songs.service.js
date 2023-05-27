"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsService = void 0;
const http_exception_1 = require("../exceptions/http.exception");
const payload_service_1 = require("./payload.service");
class SongsService extends payload_service_1.PayloadService {
    constructor() {
        super();
    }
    detailsById = async (ids) => {
        // api v4 does not contain media_preview_url
        const response = await this.http(this.endpoints.songs.id, false, {
            pids: ids,
        });
        if (!response.songs || response?.songs?.length === 0)
            throw new http_exception_1.HttpExceptionError(404, 'song not found');
        const songResults = response.songs.map((song) => this.songPayload(song));
        return songResults;
    };
    detailsByLink = async (link) => {
        // api v4 does not contain media_preview_url
        const response = await this.http(this.endpoints.songs.link, false, {
            token: link,
            type: 'song',
        });
        const songResults = response.songs.map((song) => this.songPayload(song));
        return songResults;
    };
}
exports.SongsService = SongsService;
