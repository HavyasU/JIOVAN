import { ApiService } from '../services/api.service';
import type { ModulesRequest, ModulesResponse } from '../interfaces/modules.interface';
import type { LyricsRequest, LyricsResponse } from '../interfaces/lyrics.interface';
import type { AllSearchRequest, AllSearchResponse } from '../interfaces/search.interface';
import type { ArtistAlbumRequest, ArtistAlbumResponse, ArtistRequest, ArtistResponse, ArtistSearchRequest, ArtistSearchResponse, ArtistSongRequest, ArtistSongResponse } from '../interfaces/artist.interface';
import type { PlaylistRequest, PlaylistResponse, PlaylistSearchRequest, PlaylistSearchResponse } from '../interfaces/playlist.interface';
import type { AlbumRequest, AlbumResponse, AlbumSearchRequest, AlbumSearchResponse } from '../interfaces/album.interface';
import type { SongRequest, SongResponse, SongSearchRequest, SongSearchResponse } from '../interfaces/song.interface';
export declare class PayloadService extends ApiService {
    private mapArtists;
    protected modulesPayload: (modules: ModulesRequest) => ModulesResponse;
    protected allSearchPayload: (allSearchResults: AllSearchRequest) => AllSearchResponse;
    protected songSearchPayload: (songs: SongSearchRequest) => SongSearchResponse;
    protected songPayload: (song: SongRequest) => SongResponse;
    protected albumSearchPayload: (albums: AlbumSearchRequest) => AlbumSearchResponse;
    protected albumPayload: (album: AlbumRequest) => AlbumResponse;
    protected playlistSearchPayload: (playlists: PlaylistSearchRequest) => PlaylistSearchResponse;
    protected playlistPayload: (playlist: PlaylistRequest) => PlaylistResponse;
    protected artistSearchPayload: (artists: ArtistSearchRequest) => ArtistSearchResponse;
    protected artistPayload: (artist: ArtistRequest) => ArtistResponse;
    protected artistSongPayload: (songs: ArtistSongRequest) => ArtistSongResponse;
    protected artistAlbumPayload: (albums: ArtistAlbumRequest) => ArtistAlbumResponse;
    protected lyricsPayload: (lyrics: LyricsRequest) => LyricsResponse;
}
