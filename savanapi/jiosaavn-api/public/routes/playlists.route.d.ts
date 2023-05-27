import { PlaylistsController } from '../controllers/playlists.controller';
import type { Route } from '../interfaces/route.interface';
export declare class PlaylistsRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    playlistsController: PlaylistsController;
    constructor();
    private initializeRoutes;
}
