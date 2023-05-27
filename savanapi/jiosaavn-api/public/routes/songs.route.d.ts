import { SongsController } from '../controllers/songs.controller';
import type { Route } from '../interfaces/route.interface';
export declare class SongsRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    songsController: SongsController;
    constructor();
    private initializeRoutes;
}
