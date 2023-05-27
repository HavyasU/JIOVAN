import { PayloadService } from './payload.service';
import type { SongResponse } from '../interfaces/song.interface';
import type { ArtistAlbumResponse, ArtistResponse, ArtistSongResponse } from '../interfaces/artist.interface';
export declare class ArtistsService extends PayloadService {
    constructor();
    detailsById: (id: string) => Promise<ArtistResponse>;
    detailsByLink: (link: string) => Promise<ArtistResponse>;
    artistSongs: (artistId: string, page: number, category: string, sort: string) => Promise<ArtistSongResponse>;
    artistAlbums: (artistId: string, page: number, category: string, sort: string) => Promise<ArtistAlbumResponse>;
    artistTopSongs: (artistId: string, songId: string, language: string) => Promise<SongResponse[]>;
}
