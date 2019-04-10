import * as compression from "compression";
import { NextFunction, Request, Response } from "express";

export const handleCompression = (request: Request, response: Response, next: NextFunction) => {
    compression();
    next();
    };