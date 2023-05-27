"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsService = void 0;
const payload_service_1 = require("./payload.service");
class ArtistsService extends payload_service_1.PayloadService {
    constructor() {
        super();
    }
    detailsById = async (id) => {
        const response = await this.http(this.endpoints.artists.id, true, {
            artistId: id,
        });
        const artistDetails = this.artistPayload(response);
        return artistDetails;
    };
    detailsByLink = async (link) => {
        // without api v4 no data is returned
        const response = await this.http(this.endpoints.artists.link, true, {
            token: link,
            type: 'artist',
        });
        const artistDetails = this.artistPayload(response);
        return artistDetails;
    };
    artistSongs = async (artistId, page, category, sort) => {
        // api v4 does not contain media_preview_url
        const response = await this.http(this.endpoints.artists.songs, false, {
            artistId,
            page: page - 1,
            category,
            sort_order: sort,
        });
        const artistSongs = this.artistSongPayload(response.topSongs);
        return artistSongs;
    };
    artistAlbums = async (artistId, page, category, sort) => {
        // without api v4 no data is returned
        const response = await this.http(this.endpoints.artists.albums, true, {
            artistId,
            page: page - 1,
            category,
            sort_order: sort,
        });
        const artistAlbums = this.artistAlbumPayload(response.topAlbums);
        return artistAlbums;
    };
    artistTopSongs = async (artistId, songId, language) => {
        // api v4 does not contain media_preview_url
        const response = await this.http(this.endpoints.artists.topSongs, false, {
            artist_ids: artistId,
            song_id: songId,
            language,
        });
        const artistTopSongs = response.map((song) => this.songPayload(song));
        return artistTopSongs;
    };
}
exports.ArtistsService = ArtistsService;
