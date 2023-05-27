import { PayloadService } from './payload.service';
import type { PlaylistResponse } from '../interfaces/playlist.interface';
export declare class PlaylistsService extends PayloadService {
    constructor();
    detailsById: (id: string) => Promise<PlaylistResponse>;
}
