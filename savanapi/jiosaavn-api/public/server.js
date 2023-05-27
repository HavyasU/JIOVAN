"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const modules_route_1 = require("./routes/modules.route");
const lyrics_route_1 = require("./routes/lyrics.route");
const home_route_1 = require("./routes/home.route");
const playlists_route_1 = require("./routes/playlists.route");
const albums_route_1 = require("./routes/albums.route");
const songs_route_1 = require("./routes/songs.route");
const app_1 = require("./app");
const search_route_1 = require("./routes/search.route");
const artists_route_1 = require("./routes/artists.route");
const app = new app_1.App([
    new home_route_1.HomeRoute(),
    new search_route_1.SearchRoute(),
    new songs_route_1.SongsRoute(),
    new albums_route_1.AlbumsRoute(),
    new artists_route_1.ArtistsRoute(),
    new playlists_route_1.PlaylistsRoute(),
    new lyrics_route_1.LyricsRoute(),
    new modules_route_1.ModulesRoute(),
]);
app.listen();
