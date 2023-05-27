"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadService = void 0;
const link_1 = require("../utils/link");
const api_service_1 = require("../services/api.service");
class PayloadService extends api_service_1.ApiService {
    mapArtists = (artists) => {
        if (!artists)
            return [];
        const mappedArtists = artists.map((artist) => {
            return {
                id: artist?.id,
                name: artist?.name,
                url: artist?.perma_url,
                image: (0, link_1.createImageLinks)(artist?.image),
                type: artist?.type,
                role: artist?.role,
            };
        });
        return mappedArtists;
    };
    modulesPayload = (modules) => {
        const modulesPayload = {
            albums: modules?.new_albums?.map((album) => this.albumPayload(album)),
            playlists: modules?.top_playlists?.map((playlist) => {
                return {
                    id: playlist?.id,
                    userId: playlist?.more_info?.uid,
                    title: playlist?.title,
                    subtitle: playlist?.subtitle,
                    type: playlist?.type,
                    image: (0, link_1.createImageLinks)(playlist?.image),
                    url: playlist?.perma_url,
                    songCount: playlist?.more_info?.song_count,
                    firstname: playlist?.more_info?.firstname,
                    followerCount: playlist?.more_info?.follower_count,
                    lastUpdated: playlist?.more_info?.last_updated,
                    explicitContent: playlist?.explicit_content,
                };
            }),
            charts: modules?.charts?.map((chart) => {
                return {
                    id: chart?.id,
                    title: chart?.title,
                    subtitle: chart?.subtitle,
                    type: chart?.type,
                    image: (0, link_1.createImageLinks)(chart?.image),
                    url: chart?.perma_url,
                    firstname: chart?.more_info?.firstname,
                    explicitContent: chart?.explicit_content,
                    language: chart?.language,
                };
            }),
            trending: {
                songs: modules?.new_trending
                    .filter((trending) => trending?.type === 'song')
                    .map((song) => {
                    return {
                        id: song?.id,
                        name: song?.title,
                        type: song?.type,
                        album: { id: song?.more_info?.album_id, name: song?.more_info?.album, url: song?.more_info?.album_url },
                        year: song?.year,
                        releaseDate: song?.more_info?.release_date,
                        duration: song?.more_info?.duration,
                        label: song?.more_info?.label,
                        primaryArtists: this.mapArtists(song?.more_info?.artistMap?.primary_artists),
                        featuredArtists: this.mapArtists(song.more_info?.artistMap?.featured_artists),
                        explicitContent: song?.explicit_content,
                        playCount: song?.play_count,
                        language: song?.language,
                        url: song?.perma_url,
                        image: (0, link_1.createImageLinks)(song?.image),
                    };
                }),
                albums: modules?.new_trending
                    .filter((trending) => trending?.type === 'album')
                    .map((album) => {
                    return {
                        id: album?.id,
                        name: album?.title,
                        type: album?.type,
                        year: album?.year,
                        releaseDate: album?.more_info?.release_date,
                        playCount: album?.play_count,
                        language: album?.language,
                        explicitContent: album?.explicit_content,
                        songCount: album?.more_info?.song_count,
                        url: album?.perma_url,
                        primaryArtists: this.mapArtists(album?.more_info?.artistMap?.primary_artists),
                        featuredArtists: this.mapArtists(album?.more_info?.artistMap?.featured_artists),
                        artists: this.mapArtists(album?.more_info?.artistMap?.artists),
                        image: (0, link_1.createImageLinks)(album?.image),
                    };
                }),
            },
        };
        return modulesPayload;
    };
    allSearchPayload = (allSearchResults) => {
        const allSearchPayload = {
            topQuery: {
                results: allSearchResults?.topquery?.data.map((item) => {
                    return {
                        id: item?.id,
                        title: item?.title,
                        image: (0, link_1.createImageLinks)(item?.image),
                        album: item?.album,
                        url: item?.url,
                        type: item?.type,
                        language: item?.more_info?.language,
                        description: item?.description,
                        position: item?.position,
                        primaryArtists: item?.more_info?.primary_artists,
                        singers: item?.more_info?.singers,
                    };
                }),
                position: allSearchResults?.topquery?.position,
            },
            songs: {
                results: allSearchResults?.songs?.data.map((song) => {
                    return {
                        id: song?.id,
                        title: song?.title,
                        image: (0, link_1.createImageLinks)(song?.image),
                        album: song?.album,
                        url: song?.url,
                        type: song?.type,
                        description: song?.description,
                        position: song?.position,
                        primaryArtists: song?.more_info?.primary_artists,
                        singers: song?.more_info?.singers,
                        language: song?.more_info?.language,
                    };
                }),
                position: allSearchResults.songs.position,
            },
            albums: {
                results: allSearchResults?.albums?.data.map((album) => {
                    return {
                        id: album?.id,
                        title: album?.title,
                        image: (0, link_1.createImageLinks)(album.image),
                        artist: album?.music,
                        url: album?.url,
                        type: album?.type,
                        description: album?.description,
                        position: album?.position,
                        year: album?.more_info?.year,
                        songIds: album?.more_info?.song_pids,
                        language: album?.more_info?.language,
                    };
                }),
                position: allSearchResults?.albums?.position,
            },
            artists: {
                results: allSearchResults?.artists?.data.map((artist) => {
                    return {
                        id: artist?.id,
                        title: artist?.title,
                        image: (0, link_1.createImageLinks)(artist?.image),
                        url: artist?.url,
                        type: artist?.type,
                        description: artist?.description,
                        position: artist?.position,
                    };
                }),
                position: allSearchResults?.artists?.position,
            },
            playlists: {
                results: allSearchResults?.playlists?.data.map((playlist) => {
                    return {
                        id: playlist?.id,
                        title: playlist?.title,
                        image: (0, link_1.createImageLinks)(playlist.image),
                        url: playlist?.url,
                        type: playlist?.type,
                        language: playlist?.language,
                        description: playlist?.description,
                        position: playlist?.position,
                    };
                }),
                position: allSearchResults?.playlists?.position,
            },
        };
        return allSearchPayload;
    };
    songSearchPayload = (songs) => {
        const payload = {
            total: songs?.total,
            start: songs?.start,
            results: songs?.results?.map((song) => this.songPayload(song)),
        };
        return payload;
    };
    songPayload = (song) => {
        const songPayload = {
            id: song?.id,
            name: song?.song,
            type: song?.type,
            album: { id: song?.albumid, name: song?.album, url: song?.album_url },
            year: song?.year,
            releaseDate: song?.release_date,
            duration: song?.duration,
            label: song?.label,
            primaryArtists: song?.primary_artists,
            primaryArtistsId: song?.primary_artists_id,
            featuredArtists: song?.featured_artists,
            featuredArtistsId: song?.featured_artists_id,
            explicitContent: song?.explicit_content,
            playCount: song?.play_count,
            language: song?.language,
            hasLyrics: song?.has_lyrics,
            url: song?.perma_url,
            copyright: song?.copyright_text,
            image: (0, link_1.createImageLinks)(song?.image),
            downloadUrl: (0, link_1.createDownloadLinks)(song?.encrypted_media_url),
        };
        return songPayload;
    };
    albumSearchPayload = (albums) => {
        const payload = {
            total: albums?.total,
            start: albums?.start,
            results: albums?.results?.map((album) => this.albumPayload(album)),
        };
        return payload;
    };
    albumPayload = (album) => {
        const albumPayload = {
            id: album?.albumid || album?.id,
            name: album?.title,
            year: album?.year,
            type: album?.type,
            releaseDate: album?.release_date,
            playCount: album?.play_count,
            language: album?.language,
            explicitContent: album?.explicit_content,
            songCount: album?.more_info?.song_count || album?.songs?.length?.toString(),
            url: album?.perma_url,
            primaryArtistsId: album?.primary_artists_id,
            primaryArtists: album?.primary_artists || this.mapArtists(album?.more_info?.artistMap?.primary_artists),
            featuredArtists: this.mapArtists(album?.more_info?.artistMap?.featured_artists),
            artists: this.mapArtists(album?.more_info?.artistMap?.artists),
            image: (0, link_1.createImageLinks)(album?.image),
            songs: [],
        };
        // if album details contain song list
        if (album.songs) {
            albumPayload.songs = album?.songs?.map((song) => this.songPayload(song));
        }
        return albumPayload;
    };
    playlistSearchPayload = (playlists) => {
        const payload = {
            total: playlists?.total,
            start: playlists?.start,
            results: playlists?.results?.map((playlist) => this.playlistPayload(playlist)),
        };
        return payload;
    };
    playlistPayload = (playlist) => {
        const playlistPayload = {
            id: playlist?.listid,
            userId: playlist?.uid,
            name: playlist?.listname,
            followerCount: playlist?.follower_count,
            songCount: playlist?.count || playlist?.list_count,
            fanCount: playlist?.fan_count?.toString(),
            username: playlist?.username,
            firstname: playlist?.firstname,
            lastname: playlist?.lastname,
            language: playlist?.language,
            shares: playlist?.share,
            image: (0, link_1.createImageLinks)(playlist?.image),
            url: playlist?.perma_url,
            songs: [],
        };
        // if playlist details contain song list
        if (playlist.songs) {
            playlistPayload.songs = playlist?.songs?.map((song) => this.songPayload(song));
        }
        return playlistPayload;
    };
    artistSearchPayload = (artists) => {
        const payload = {
            total: artists?.total,
            start: artists?.start,
            results: artists?.results?.map((artist) => this.artistPayload(artist)),
        };
        return payload;
    };
    artistPayload = (artist) => {
        const artistPayload = {
            id: artist?.artistId || artist?.id,
            name: artist?.name,
            url: artist?.urls?.overview || artist?.perma_url,
            role: artist?.role,
            image: (0, link_1.createImageLinks)(artist?.image),
            followerCount: artist?.follower_count,
            fanCount: artist?.fan_count,
            isVerified: artist?.isVerified,
            dominantLanguage: artist?.dominantLanguage,
            dominantType: artist?.dominantType,
            bio: artist.bio && JSON.parse(artist?.bio),
            dob: artist?.dob,
            fb: artist?.fb,
            twitter: artist?.twitter,
            wiki: artist?.wiki,
            availableLanguages: artist?.availableLanguages,
            isRadioPresent: artist.isRadioPresent,
        };
        return artistPayload;
    };
    artistSongPayload = (songs) => {
        const payload = {
            total: songs.total,
            lastPage: songs.last_page,
            results: songs?.songs?.map((song) => this.songPayload(song)),
        };
        return payload;
    };
    artistAlbumPayload = (albums) => {
        const payload = {
            total: albums.total,
            lastPage: albums.last_page,
            results: albums?.albums?.map((album) => this.albumPayload(album)),
        };
        return payload;
    };
    lyricsPayload = (lyrics) => {
        const payload = {
            lyrics: (0, link_1.sanitizeLyrics)(lyrics.lyrics),
            snippet: lyrics.snippet,
            copyright: lyrics.lyrics_copyright,
        };
        return payload;
    };
}
exports.PayloadService = PayloadService;
