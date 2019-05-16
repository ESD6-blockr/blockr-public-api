import { NextFunction, Request, Response } from "express-serve-static-core";
import { inject, injectable } from "inversify";
import { TransactionService } from "../services";
import { AbstractRouter } from "./abstractRouter";

const ROUTE = "/transactions";

@injectable()
export class TransactionRouter extends AbstractRouter {

    private readonly transactionService: TransactionService;

    constructor(@inject(TransactionService) transactionService: TransactionService) {
        super(ROUTE);
        this.transactionService = transactionService;
    }

    public configure(): void {
        this.router.route("/")
            .get(this.getTransactions())
            .post(this.addTransaction());
    }

    private getTransactions(): (request: Request, response: Response, next: NextFunction) => void {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.getTransactionsAsync(request, response, next);
        };
    }

    private addTransaction(): (request: Request, response: Response, next: NextFunction) => void {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.addTransactionAsync(request, response, next);
        };
    }
}
