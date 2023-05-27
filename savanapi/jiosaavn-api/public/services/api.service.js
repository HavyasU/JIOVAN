"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const tslib_1 = require("tslib");
const got_cjs_1 = tslib_1.__importDefault(require("got-cjs"));
const configs_1 = require("../configs");
class ApiService {
    httpClient;
    baseURL;
    endpoints;
    constructor() {
        const { baseURL, endpoint } = (0, configs_1.getConfig)();
        this.baseURL = baseURL;
        this.endpoints = endpoint;
        this.httpClient = got_cjs_1.default.extend({
            prefixUrl: this.baseURL,
            searchParams: new URLSearchParams([
                ['_format', 'json'],
                ['_marker', '0'],
                ['ctx', 'web6dot0'],
            ]),
            responseType: 'json',
            headers: {
                cookie: 'L=english; gdpr_acceptance=true; DL=english',
            },
            hooks: {
                beforeRequest: [
                    (options) => {
                        // set default language in cookie
                        const languageHeader = new URLSearchParams(options.searchParams).get('language') || 'english';
                        options.headers = {
                            cookie: `L=${encodeURIComponent(languageHeader)}; gdpr_acceptance=true; DL=english`,
                        };
                    },
                ],
            },
        });
    }
    http(url, isVersion4, query) {
        const v4 = isVersion4 ? { api_version: 4 } : undefined;
        const queryParams = { ...v4, ...query };
        return this.httpClient({ searchParams: { __call: url, ...queryParams } }).json();
    }
}
exports.ApiService = ApiService;
