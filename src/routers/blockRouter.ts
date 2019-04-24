import { Block } from "@blockr/blockr-data-access/node_modules/@blockr/blockr-models";
import { NextFunction, Request, Response } from "express-serve-static-core";
import { inject, injectable } from "inversify";
import { BlockService } from "../services";
import { AbstractRouter } from "./abstractrouter";

@injectable()
export class BlockRouter extends AbstractRouter {
    private static readonly ROUTE = "/blocks";
    protected blockService: BlockService;

    constructor(@inject(BlockService) blockService: BlockService) {
        super(BlockRouter.ROUTE);
        this.blockService = blockService;
    }

    public configure(): void {
        this.router.route("/")
            .get(this.getBlocks());
    }

    private getBlocks(): (request: Request, response: Response, next: NextFunction) => Promise<Block[]> {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getBlocksAsync(request, response, next);
        };
    }
}
