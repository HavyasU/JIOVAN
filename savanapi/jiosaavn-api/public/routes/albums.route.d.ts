import { AlbumsController } from '../controllers/albums.controller';
import type { Route } from '../interfaces/route.interface';
export declare class AlbumsRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    albumsController: AlbumsController;
    constructor();
    private initializeRoutes;
}
