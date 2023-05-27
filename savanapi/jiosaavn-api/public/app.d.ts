import express from 'express';
import type { Config } from './interfaces/config.interface';
import type { Route } from './interfaces/route.interface';
export declare class App {
    app: express.Application;
    port: number;
    config: Config;
    env: string;
    constructor(routes: Route[]);
    private initializeMiddlewares;
    private initializeRoutes;
    private initializeRouteFallback;
    private initializeErrorHandling;
    listen(): void;
    getServer(): express.Application;
}
