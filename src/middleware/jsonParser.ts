import { NextFunction, Request, Response } from "express";
import * as parser from "body-parser";

export const handleBodyRequestParsing = (request: Request, response: Response, next: NextFunction) => {
    parser.urlencoded({ extended: true });
    parser.json();
    next()
};