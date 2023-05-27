import { LyricsController } from '../controllers/lyrics.controller';
import type { Route } from '../interfaces/route.interface';
export declare class LyricsRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    lyricsController: LyricsController;
    constructor();
    private initializeRoutes;
}
