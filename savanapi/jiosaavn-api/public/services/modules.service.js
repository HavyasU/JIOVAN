"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesService = void 0;
const payload_service_1 = require("./payload.service");
class ModulesService extends payload_service_1.PayloadService {
    constructor() {
        super();
    }
    modules = async (language) => {
        const response = await this.http(this.endpoints.modules, true, {
            language,
        });
        const modulesResult = this.modulesPayload(response);
        return modulesResult;
    };
}
exports.ModulesService = ModulesService;
