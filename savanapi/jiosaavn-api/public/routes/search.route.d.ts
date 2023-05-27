import { SearchController } from '../controllers/search.controller';
import type { Route } from '../interfaces/route.interface';
export declare class SearchRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    searchController: SearchController;
    constructor();
    private initializeRoutes;
}
