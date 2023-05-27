"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsController = void 0;
const constants_1 = require("../constants");
const songs_service_1 = require("../services/songs.service");
class SongsController {
    songsService;
    constructor() {
        this.songsService = new songs_service_1.SongsService();
    }
    songDetails = async (req, res, next) => {
        try {
            const { id, link } = req.query;
            let result;
            if (id) {
                result = await this.songsService.detailsById(id);
            }
            else {
                result = await this.songsService.detailsByLink(link);
            }
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.SongsController = SongsController;
