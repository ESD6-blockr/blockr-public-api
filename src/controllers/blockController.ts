import { Request, Response } from "express";
import { NextFunction } from "connect";

export class BlockController {
    public async getBlocks(request: Request, response: Response, next: NextFunction){
        response.send("test");
        next();
    }
}