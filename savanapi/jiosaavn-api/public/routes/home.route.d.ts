import { HomeController } from '../controllers/home.controller';
import type { Route } from '../interfaces/route.interface';
export declare class HomeRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    homeController: HomeController;
    constructor();
    private initializeRoutes;
}
