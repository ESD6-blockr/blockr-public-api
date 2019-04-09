import { Request, Response } from "express";

export class BlockController {
    public async getBlocks(req: Request, res: Response){
        res.send("test");
    }
}