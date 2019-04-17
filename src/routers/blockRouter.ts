import { AbstractRouter } from "./abstractrouter";
import { BlockService } from "../services";
import { NextFunction, Request, Response } from "express-serve-static-core";

export class BlockRouter extends AbstractRouter {

    blockService: BlockService;

    public configure(): void {
        this.blockService = new BlockService();
        this.router.route("/")
            .get(this.getBlocks());
    }

    constructor(path: string) {
        super(path);
    }

    private getBlocks(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getBlocks(request, response, next);
        };
    }
}