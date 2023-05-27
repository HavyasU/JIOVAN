"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsController = void 0;
const artists_service_1 = require("../services/artists.service");
const constants_1 = require("../constants");
class ArtistsController {
    artistsService;
    constructor() {
        this.artistsService = new artists_service_1.ArtistsService();
    }
    artistDetails = async (req, res, next) => {
        try {
            const { id, link } = req.query;
            let result;
            if (id) {
                result = await this.artistsService.detailsById(id);
            }
            else {
                result = await this.artistsService.detailsByLink(link);
            }
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
    artistSongs = async (req, res, next) => {
        try {
            const { page, category, sort } = req.query;
            const { artistId } = req.params;
            const result = await this.artistsService.artistSongs(artistId, Number(page), category, sort);
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
    artistTopSongs = async (req, res, next) => {
        try {
            const { language } = req.query;
            const { artistId, songId } = req.params;
            const result = await this.artistsService.artistTopSongs(artistId, songId, language);
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
    artistAblums = async (req, res, next) => {
        try {
            const { page, category, sort } = req.query;
            const { artistId } = req.params;
            const result = await this.artistsService.artistAlbums(artistId, Number(page), category, sort);
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.ArtistsController = ArtistsController;
