export declare const createDownloadLinks: (encryptedMediaUrl: string) => false | {
    quality: string;
    link: string;
}[];
export declare const createImageLinks: (link?: string) => false | {
    quality: string;
    link: string;
}[];
export declare const sanitizeLyrics: (lyrics: string) => string;
