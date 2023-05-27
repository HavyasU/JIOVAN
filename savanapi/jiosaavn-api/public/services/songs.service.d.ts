import { PayloadService } from './payload.service';
import type { SongResponse } from '../interfaces/song.interface';
export declare class SongsService extends PayloadService {
    constructor();
    detailsById: (ids: string) => Promise<SongResponse[]>;
    detailsByLink: (link: string) => Promise<SongResponse[]>;
}
