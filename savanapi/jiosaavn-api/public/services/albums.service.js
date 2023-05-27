"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumsService = void 0;
const payload_service_1 = require("./payload.service");
class AlbumsService extends payload_service_1.PayloadService {
    constructor() {
        super();
    }
    detailsById = async (id) => {
        // api v4 does not contain media_preview_url
        const response = await this.http(this.endpoints.albums.id, false, {
            albumid: id,
        });
        const albumResults = this.albumPayload(response);
        return albumResults;
    };
    detailsByLink = async (link) => {
        // api v4 does not contain media_preview_url
        const response = await this.http(this.endpoints.albums.link, false, {
            token: link,
            type: 'album',
        });
        const albumResults = this.albumPayload(response);
        return albumResults;
    };
}
exports.AlbumsService = AlbumsService;
