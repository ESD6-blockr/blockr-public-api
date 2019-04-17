import { AbstractRouter } from "./abstractrouter";
import { TransactionService } from "../services";
import { NextFunction, Request, Response } from "express-serve-static-core";

export class TransactionRouter extends AbstractRouter {

    transactionService: TransactionService;

    public configure(): void {
        this.transactionService = new TransactionService();
        this.router.route("/")
            .get(this.getTransactions())
            .post(this.addTransaction());
    }

    constructor(path: string) {
        super(path);
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