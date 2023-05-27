"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesController = void 0;
const constants_1 = require("../constants");
const modules_service_1 = require("../services/modules.service");
class ModulesController {
    modulesService;
    constructor() {
        this.modulesService = new modules_service_1.ModulesService();
    }
    browseModules = async (req, res, next) => {
        try {
            const { language } = req.query;
            const result = await this.modulesService.modules(language);
            res.json({ status: constants_1.globalConstants.status.success, message: null, data: result });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.ModulesController = ModulesController;
