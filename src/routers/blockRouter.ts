import { AbstractRouter } from "./abstractrouter";
import { BlockController } from "../controllers";
import { NextFunction, Request, Response } from "express-serve-static-core";

export class BlockRouter extends AbstractRouter {

    blockController: BlockController;

    public configure(): void {
        this.blockController = new BlockController();
        this.router.get("/", this.getAllBlocks());
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
            this.blockController.getAllBlocks(request, response, next);
        };
    }
    
    private getBlockByNumer(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockController.getBlockByNumer(request, response, next);
        };
    }

    private getBlockByHash(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockController.getBlockByHash(request, response, next);
        };
    }

    private getBlocksByPeriod(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockController.getBlocksByPeriod(request, response, next);
        };
    }

    private getBlocksByDate(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockController.getBlocksByDate(request, response, next);
        };
    }

    private getBlocksByWallet(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockController.getBlocksByWallet(request, response, next);
        };
    }

    private getPreviousBlock(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockController.getPreviousBlock(request, response, next);
        };
    }

    private getNextBlock(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockController.getNextBlock(request, response, next);
        };
    }

    private getNextBlocks(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.blockController.getNextBlocks(request, response, next);
        };
    }
}