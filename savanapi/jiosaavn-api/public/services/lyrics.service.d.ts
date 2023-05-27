import { PayloadService } from '../services/payload.service';
export declare class LyricsService extends PayloadService {
    songLyrics: (songId: string) => Promise<import("../interfaces/lyrics.interface").LyricsResponse>;
}
