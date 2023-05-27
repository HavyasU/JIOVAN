import { ArtistsController } from '../controllers/artists.controller';
import type { Route } from '../interfaces/route.interface';
export declare class ArtistsRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    artistsController: ArtistsController;
    constructor();
    private initializeRoutes;
}
