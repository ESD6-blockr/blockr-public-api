import { logger } from "@blockr/blockr-logger";
import { NextFunction, Request, Response } from "express";
 
export const queryFilterMiddleware = (request: Request, response: Response, next: NextFunction) => {
    let queries: [string, string] = request.query;

    // When there are no queries, go out
    // if (queries. < 1){
    //     next();
    // }

    // Create sql query for all query parameters and add to the request
    

    // TEST
    logger.info(queries);
    response.getHeader("niks"); //UNUSED
    
    for (const key in queries) {
        const value = queries[key];
        logger.info(key);
        logger.info(value);
    }

    next();
};
