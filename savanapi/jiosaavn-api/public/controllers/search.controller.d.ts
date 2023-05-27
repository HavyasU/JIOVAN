import type { RequestHandler } from 'express';
export declare class SearchController {
    private searchService;
    constructor();
    searchAll: RequestHandler;
    searchSongs: RequestHandler;
    searchAlbums: RequestHandler;
    searchPlaylists: RequestHandler;
    searchArtists: RequestHandler;
}
