import { PayloadService } from './payload.service';
import type { ModulesResponse } from '../interfaces/modules.interface';
export declare class ModulesService extends PayloadService {
    constructor();
    modules: (language: string) => Promise<ModulesResponse>;
}
