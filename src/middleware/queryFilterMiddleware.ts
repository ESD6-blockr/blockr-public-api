import { NextFunction, Request, Response } from "express";
import { url } from "inspector";
 
export const queryFilterMiddleware = (request: Request, response: Response, next: NextFunction) => {
    let querys: { Record<string, string> } = request.query;
    if (querys. < 1){
        next();
    }
    console.log(querys);
    for (let key in querys) {
        let value = querys[key];
        console.log(key);
        console.log(value);
    }

    next();
};
