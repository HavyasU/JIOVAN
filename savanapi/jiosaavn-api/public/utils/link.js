"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeLyrics = exports.createImageLinks = exports.createDownloadLinks = void 0;
const node_forge_1 = require("node-forge");
// create download links for different bitrates
const createDownloadLinks = (encryptedMediaUrl) => {
    if (!encryptedMediaUrl)
        return false;
    const qualities = [
        { id: '_12', bitrate: '12kbps' },
        { id: '_48', bitrate: '48kbps' },
        { id: '_96', bitrate: '96kbps' },
        { id: '_160', bitrate: '160kbps' },
        { id: '_320', bitrate: '320kbps' },
    ];
    const key = '38346591';
    const iv = '00000000';
    const encrypted = node_forge_1.util.decode64(encryptedMediaUrl);
    const decipher = node_forge_1.cipher.createDecipher('DES-ECB', node_forge_1.util.createBuffer(key, 'utf8'));
    decipher.start({ iv: node_forge_1.util.createBuffer(iv, 'utf8') });
    decipher.update(node_forge_1.util.createBuffer(encrypted));
    decipher.finish();
    const decryptedLink = decipher.output.getBytes();
    const links = qualities.map((quality) => ({
        quality: quality.bitrate,
        link: decryptedLink.replace('_96', quality.id),
    })) || false;
    return links;
};
exports.createDownloadLinks = createDownloadLinks;
// create image links for different resolutions
const createImageLinks = (link) => {
    if (!link)
        return false;
    const qualities = ['50x50', '150x150', '500x500'];
    return (qualities.map((quality) => ({
        quality,
        link: link.includes('150x150') ? link.replace('150x150', quality) : link.replace('50x50', quality),
    })) || false);
};
exports.createImageLinks = createImageLinks;
// sanitize lyrics using sentence case
const sanitizeLyrics = (lyrics) => lyrics
    .replace(/"/gi, "'")
    .replace(/ {2}/gi, ' ')
    .split('<br>')
    .map((text) => {
    const firstLetter = text.slice(0, 1);
    return firstLetter.toUpperCase() + text.slice(1);
})
    .join(' ');
exports.sanitizeLyrics = sanitizeLyrics;
