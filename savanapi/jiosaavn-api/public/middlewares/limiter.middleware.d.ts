import type { NextFunction, Request, Response } from 'express';
export declare const rateLimiterMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<void>;
