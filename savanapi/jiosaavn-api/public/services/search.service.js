"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const payload_service_1 = require("../services/payload.service");
class SearchService extends payload_service_1.PayloadService {
    constructor() {
        super();
    }
    all = async (query) => {
        // api v4 doest not provide positions
        const result = await this.http(this.endpoints.search.all, false, { query });
        const allSearchResponse = this.allSearchPayload(result);
        return allSearchResponse;
    };
    songs = async (query, page, limit) => {
        // api v4 does not contain media_preview_url
        const response = await this.http(this.endpoints.search.songs, false, {
            q: query,
            p: page,
            n: limit,
        });
        const searchResults = this.songSearchPayload(response);
        return searchResults;
    };
    albums = async (query, page, limit) => {
        const response = await this.http(this.endpoints.search.albums, true, {
            q: query,
            p: page,
            n: limit,
        });
        const payload = this.albumSearchPayload(response);
        return payload;
    };
    playlists = async (query, page, limit) => {
        const response = await this.http(this.endpoints.search.playlists, false, {
            q: query,
            p: page,
            n: limit,
        });
        const payload = this.playlistSearchPayload(response);
        return payload;
    };
    artists = async (query, page, limit) => {
        const response = await this.http(this.endpoints.search.artists, false, {
            q: query,
            p: page,
            n: limit,
        });
        const payload = this.artistSearchPayload(response);
        return payload;
    };
}
exports.SearchService = SearchService;
