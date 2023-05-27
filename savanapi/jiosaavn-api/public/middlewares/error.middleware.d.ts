import type { NextFunction, Request, Response } from 'express';
import type { HttpExceptionError } from '../exceptions/http.exception';
export declare const errorMiddleware: (error: HttpExceptionError, req: Request, res: Response, next: NextFunction) => void;
