import { AbstractRouter } from "./abstractrouter";
import { BlockController } from "../controllers/blockController";
import { Request, Response } from "express-serve-static-core";

export class BlockRouter extends AbstractRouter {
    blockController = new BlockController();


    public configure(): void {
        throw new Error("Method not implemented.");
    }

    constructor(path: string) {
        super(path);
        this.router.get("/" + path, this.getBlocks);
    }

    async getBlocks(req: Request, res: Response) {
        this.blockController.getBlocks(req, res);
    }

}