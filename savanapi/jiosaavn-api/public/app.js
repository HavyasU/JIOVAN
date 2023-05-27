"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const tslib_1 = require("tslib");
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const express_timeout_handler_1 = tslib_1.__importDefault(require("express-timeout-handler"));
const limiter_middleware_1 = require("./middlewares/limiter.middleware");
const error_middleware_1 = require("./middlewares/error.middleware");
const logger_1 = require("./utils/logger");
const configs_1 = require("./configs");
class App {
    app;
    port;
    config;
    env;
    constructor(routes) {
        this.config = (0, configs_1.getConfig)();
        this.app = (0, express_1.default)();
        this.env = this.config.env;
        this.port = this.config.server.port;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeRouteFallback();
        this.initializeErrorHandling();
    }
    initializeMiddlewares() {
        this.app.use((0, morgan_1.default)(this.config.log.format));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(limiter_middleware_1.rateLimiterMiddleware);
        // vercel has timeout limit of 10sec on hobby plan, this allows to throw an error before vercel times out
        this.app.use(express_timeout_handler_1.default.handler({
            timeout: 9500,
            onTimeout(req, res) {
                res.status(503).json({
                    status: 'FAILED',
                    message: 'request timeout',
                    data: null,
                });
            },
        }));
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }
    initializeRouteFallback() {
        this.app.use((req, res) => {
            res.status(404).json({
                status: 'FAILED',
                message: 'route not found, please check documentation at https://docs.saavn.me',
                data: null,
            });
        });
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.errorMiddleware);
    }
    listen() {
        this.app.listen(this.port, () => {
            logger_1.logger.info(`🚀 Server listening on ${this.port}`);
        });
    }
    getServer() {
        return this.app;
    }
}
exports.App = App;
