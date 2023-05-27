"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistsController = void 0;
const constants_1 = require("../constants");
const playlists_service_1 = require("../services/playlists.service");
class PlaylistsController {
    playlistsService;
    constructor() {
        this.playlistsService = new playlists_service_1.PlaylistsService();
    }
    playlistDetails = async (req, res, next) => {
        try {
            const { id } = req.query;
            const result = await this.playlistsService.detailsById(id);
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.PlaylistsController = PlaylistsController;
