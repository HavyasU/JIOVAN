import { PayloadService } from '../services/payload.service';
import type { SongSearchResponse } from '../interfaces/song.interface';
export declare class SearchService extends PayloadService {
    constructor();
    all: (query: string) => Promise<import("../interfaces/search.interface").AllSearchResponse>;
    songs: (query: string, page: number, limit: number) => Promise<SongSearchResponse>;
    albums: (query: string, page: number, limit: number) => Promise<import("../interfaces/album.interface").AlbumSearchResponse>;
    playlists: (query: string, page: number, limit: number) => Promise<import("../interfaces/playlist.interface").PlaylistSearchResponse>;
    artists: (query: string, page: number, limit: number) => Promise<import("../interfaces/artist.interface").ArtistSearchResponse>;
}
