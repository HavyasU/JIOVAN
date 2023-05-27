import { ModulesController } from '../controllers/modules.controller';
import type { Route } from '../interfaces/route.interface';
export declare class ModulesRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    modulesController: ModulesController;
    constructor();
    private initializeRoutes;
}
