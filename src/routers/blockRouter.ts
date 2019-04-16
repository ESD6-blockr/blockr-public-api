import { AbstractRouter } from "./abstractrouter";
import { BlockService } from "../services";
import { NextFunction, Request, Response } from "express-serve-static-core";

export class BlockRouter extends AbstractRouter {

    blockService: BlockService;

    public configure(): void {
        this.blockService = new BlockService();
        this.router.get("/blocks", this.getAllBlocks());
        this.router.get("/", this.getBlockByNumer());
        this.router.get("/", this.getBlockByHash());
        this.router.get("/", this.getBlocksByPeriod());
        this.router.get("/", this.getBlocksByDate());
        this.router.get("/", this.getBlocksByWallet());
        this.router.get("/", this.getPreviousBlock());
        this.router.get("/", this.getNextBlock());
        this.router.get("/", this.getNextBlocks());
    }

    constructor(path: string) {
        super(path);
    }

    private getAllBlocks(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getAllBlocks(request, response, next);
        };
    }
    
    private getBlockByNumer(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getBlockByNumer(request, response, next);
        };
    }

    private getBlockByHash(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getBlockByHash(request, response, next);
        };
    }

    private getBlocksByPeriod(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getBlocksByPeriod(request, response, next);
        };
    }

    private getBlocksByDate(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getBlocksByDate(request, response, next);
        };
    }

    private getBlocksByWallet(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getBlocksByWallet(request, response, next);
        };
    }

    private getPreviousBlock(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getPreviousBlock(request, response, next);
        };
    }

    private getNextBlock(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getNextBlock(request, response, next);
        };
    }

    private getNextBlocks(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockService.getNextBlocks(request, response, next);
        };
    }
}