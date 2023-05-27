import { PayloadService } from './payload.service';
import type { AlbumResponse } from '../interfaces/album.interface';
export declare class AlbumsService extends PayloadService {
    constructor();
    detailsById: (id: string) => Promise<AlbumResponse>;
    detailsByLink: (link: string) => Promise<AlbumResponse>;
}
