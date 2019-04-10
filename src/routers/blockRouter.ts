import { AbstractRouter } from "./abstractrouter";
import { BlockController } from "../controllers/blockController";
import { NextFunction, Request, Response } from "express-serve-static-core";

export class BlockRouter extends AbstractRouter {

    blockController: BlockController;

    public configure(): void {
        this.blockController = new BlockController();
        this.router.get(`/`, this.getBlocks());
    }

    constructor(path: string) {
        super(path);
    }
    
    private getBlocks(): (req: Request, res: Response, next: NextFunction) => any {
        return (req: Request, res: Response, next: NextFunction) => {
            this.blockController.getBlocks(req, res, next);
        };
    }
}