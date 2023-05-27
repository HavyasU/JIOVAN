"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistsService = void 0;
const payload_service_1 = require("./payload.service");
class PlaylistsService extends payload_service_1.PayloadService {
    constructor() {
        super();
    }
    detailsById = async (id) => {
        // api v4 does not contain media_preview_url
        const response = await this.http(this.endpoints.playlists.id, false, {
            listid: id,
        });
        const playlistResults = this.playlistPayload(response);
        return playlistResults;
    };
}
exports.PlaylistsService = PlaylistsService;
