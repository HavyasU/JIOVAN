import type { RequestHandler } from 'express';
export declare class ArtistsController {
    private artistsService;
    constructor();
    artistDetails: RequestHandler;
    artistSongs: RequestHandler;
    artistTopSongs: RequestHandler;
    artistAblums: RequestHandler;
}
