import { NextFunction, Request, Response } from "express-serve-static-core";
import { TransactionService } from "../services";
import { AbstractRouter } from "./abstractrouter";

export class TransactionRouter extends AbstractRouter {

    private transactionService: TransactionService;

    constructor(path: string) {
        super(path);
    }
    
    public configure(): void {
        this.transactionService = new TransactionService();
        this.router.route("/")
            .get(this.getTransactions())
            .post(this.addTransaction());
    }

    private getTransactions(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.getTransactions(request, response, next);
        };
    }

    private addTransaction(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.addTransaction(request, response, next);
        };
    }
}