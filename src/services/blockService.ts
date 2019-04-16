import { Request, Response } from "express";
import { NextFunction } from "connect";

export class BlockService {
    public async getAllBlocks(request: Request, response: Response, next: NextFunction){
        throw new Error("getAllBlocks not implemented!");
        next();
    }
    
    public async getBlockByNumer(request: Request, response: Response, next: NextFunction){
        throw new Error("getBlockByNumer not implemented!");
        next();
    }

    public async getBlockByHash(request: Request, response: Response, next: NextFunction){
        throw new Error("getBlockByHash not implemented!");
        next();
    }

    public async getBlocksByPeriod(request: Request, response: Response, next: NextFunction){
        throw new Error("getBlocksByPeriod not implemented!");
        next();
    }

    public async getBlocksByDate(request: Request, response: Response, next: NextFunction){
        throw new Error("getBlocksByDate not implemented!");
        next();
    }

    public async getBlocksByWallet(request: Request, response: Response, next: NextFunction){
        throw new Error("getBlocksByWallet not implemented!");
        next();
    }

    public async getPreviousBlock(request: Request, response: Response, next: NextFunction){
        throw new Error("getPreviousBlock not implemented!");
        next();
    }

    public async getNextBlock(request: Request, response: Response, next: NextFunction){
        throw new Error("getNextBlock not implemented!");
        next();
    }

    public async getNextBlocks(request: Request, response: Response, next: NextFunction){
        throw new Error("getNextBlocks not implemented!");
        next();
    }
}