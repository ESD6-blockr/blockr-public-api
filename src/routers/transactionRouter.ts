import { NextFunction, Request, Response } from "express-serve-static-core";
import { inject, injectable } from "inversify";
import { TransactionService } from "../services";
import { AbstractRouter } from "./abstractrouter";

const ROUTE = "/transactions";

@injectable()
export class TransactionRouter extends AbstractRouter {
    
    private transactionService: TransactionService;

    constructor(@inject(TransactionService) transactionService: TransactionService) {
        super(ROUTE);
        this.transactionService = transactionService;
    }
    
    public configure(): void {
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
            this.transactionService.addTransactionAsync(request, response, next);
        };
    }
}
