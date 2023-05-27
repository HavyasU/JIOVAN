"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const constants_1 = require("../constants");
const search_service_1 = require("../services/search.service");
class SearchController {
    searchService;
    constructor() {
        this.searchService = new search_service_1.SearchService();
    }
    // search everything i.e songs, artists, albums, etc
    searchAll = async (req, res, next) => {
        try {
            const { query } = req.query;
            const result = await this.searchService.all(query);
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
    // search songs (includes download links)
    searchSongs = async (req, res, next) => {
        try {
            const { query, page, limit } = req.query;
            const result = await this.searchService.songs(query, Number(page), Number(limit));
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
    // search albums only
    searchAlbums = async (req, res, next) => {
        try {
            const { query, page, limit } = req.query;
            const result = await this.searchService.albums(query, Number(page), Number(limit));
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
    // search playlists only
    searchPlaylists = async (req, res, next) => {
        try {
            const { query, page, limit } = req.query;
            const result = await this.searchService.playlists(query, Number(page), Number(limit));
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
    // search artists only
    searchArtists = async (req, res, next) => {
        try {
            const { query, page, limit } = req.query;
            const result = await this.searchService.artists(query, Number(page), Number(limit));
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.SearchController = SearchController;
