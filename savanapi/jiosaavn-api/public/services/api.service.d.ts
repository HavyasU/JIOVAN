import type { Config } from '../interfaces/config.interface';
export declare class ApiService {
    private httpClient;
    private baseURL;
    protected endpoints: Config['endpoint'];
    constructor();
    protected http<T>(url: string, isVersion4: boolean, query?: Record<string, string | number>): Promise<T>;
}
