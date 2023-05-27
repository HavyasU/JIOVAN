"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiterMiddleware = void 0;
const lru_cache_1 = require("lru-cache");
const http_exception_1 = require("../exceptions/http.exception");
const configs_1 = require("../configs");
const { enableRateLimit } = (0, configs_1.getConfig)();
const tokenCache = new lru_cache_1.LRUCache({
    max: 500,
    ttl: 60000,
});
const rateLimiterMiddleware = async (req, res, next) => {
    try {
        // skip middleware if rate limit is disabled
        if (!enableRateLimit || req.path === '/')
            return next();
        const limit = 6;
        const xff = req.headers['x-forwarded-for'];
        const userIp = xff ? (Array.isArray(xff) ? xff[0] : xff.split(',')[0]) : '127.0.0.1';
        const tokenCount = tokenCache.get(userIp) || [0];
        if (tokenCount[0] === 0)
            tokenCache.set(userIp, tokenCount);
        tokenCount[0] += 1;
        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage > limit;
        res.set('x-ratelimit-remaining', isRateLimited ? '0' : (limit - currentUsage).toString());
        res.set('x-ratelimit-limit', limit.toString());
        if (isRateLimited)
            throw new http_exception_1.HttpExceptionError(429, 'rate limit exceeded, please try again later');
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.rateLimiterMiddleware = rateLimiterMiddleware;
