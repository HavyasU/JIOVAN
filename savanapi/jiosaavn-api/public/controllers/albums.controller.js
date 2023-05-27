"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumsController = void 0;
const constants_1 = require("../constants");
const albums_service_1 = require("../services/albums.service");
class AlbumsController {
    albumsService;
    constructor() {
        this.albumsService = new albums_service_1.AlbumsService();
    }
    albumDetails = async (req, res, next) => {
        try {
            const { id, link } = req.query;
            let result;
            if (id) {
                result = await this.albumsService.detailsById(id);
            }
            else {
                result = await this.albumsService.detailsByLink(link);
            }
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.AlbumsController = AlbumsController;
