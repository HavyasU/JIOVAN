"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = exports.artistRecommendedSongsSchema = exports.artistSongsAndAlbumsSchema = exports.artistsSchema = exports.albumsSchema = exports.songsSchema = exports.searchSchema = void 0;
const celebrate_1 = require("celebrate");
exports.searchSchema = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object().keys({
        query: celebrate_1.Joi.string().required(),
        page: celebrate_1.Joi.string().default(1),
        limit: celebrate_1.Joi.string().default(10),
    }),
}, { abortEarly: false }, { mode: celebrate_1.Modes.FULL });
exports.songsSchema = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object()
        .keys({
        id: celebrate_1.Joi.string(),
        link: celebrate_1.Joi.string().custom((value, helper) => {
            if (value.includes(`jiosaavn.com/song/`)) {
                const token = value.split(`/song/`)[1]?.split('/')[1]?.slice(0, 11);
                return token;
            }
            else {
                return helper.message({
                    custom: 'invalid song link',
                });
            }
        }),
    })
        .xor('id', 'link')
        .messages({ error: 'id and link are not supported together, pass only one of them' }),
}, { abortEarly: false }, { mode: celebrate_1.Modes.FULL });
exports.albumsSchema = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object()
        .keys({
        id: celebrate_1.Joi.string(),
        link: celebrate_1.Joi.string().custom((value, helper) => {
            if (value.includes(`jiosaavn.com/album/`)) {
                const token = value.split(`album/`)[1].split('/')[1].slice(0, 11);
                return token;
            }
            else {
                return helper.message({
                    custom: 'invalid album link',
                });
            }
        }),
    })
        .xor('id', 'link')
        .messages({ error: 'id and link are not supported together, pass only one of them' }),
}, { abortEarly: false }, { mode: celebrate_1.Modes.FULL });
exports.artistsSchema = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object()
        .keys({
        id: celebrate_1.Joi.string(),
        link: celebrate_1.Joi.string().custom((value, helper) => {
            if (value.includes(`jiosaavn.com/artist/`)) {
                const token = value.split(`artist/`)[1].split('/')[1].slice(0, 11);
                return token;
            }
            else {
                return helper.message({
                    custom: 'invalid artist link',
                });
            }
        }),
    })
        .xor('id', 'link')
        .messages({ error: 'id and link are not supported together, pass only one of them' }),
}, { abortEarly: false }, { mode: celebrate_1.Modes.FULL });
exports.artistSongsAndAlbumsSchema = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object().keys({
        page: celebrate_1.Joi.string().default(1),
        category: celebrate_1.Joi.string().valid('alphabetical', 'latest').optional(),
        sort: celebrate_1.Joi.string().valid('asc', 'desc').optional(),
    }),
}, { abortEarly: false }, { mode: celebrate_1.Modes.FULL });
exports.artistRecommendedSongsSchema = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object().keys({
        language: celebrate_1.Joi.string().default('english'),
    }),
}, { abortEarly: false }, { mode: celebrate_1.Modes.FULL });
exports.idSchema = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object().keys({
        id: celebrate_1.Joi.string().required(),
    }),
}, { abortEarly: false }, { mode: celebrate_1.Modes.FULL });
