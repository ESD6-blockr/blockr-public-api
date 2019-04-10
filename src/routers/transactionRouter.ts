import { AbstractRouter } from "./abstractrouter";
import { TransactionController } from "../controllers";
import { NextFunction, Request, Response } from "express-serve-static-core";

export class TransactionRouter extends AbstractRouter {

    transactionController: TransactionController;

    public configure(): void {
        this.transactionController = new TransactionController();
        this.router.get("/", this.getAllTransactions());
        this.router.get("/", this.getTransactionsByAmount());
        this.router.get("/", this.getTransactionsByDate());
        this.router.get("/", this.getTransactionsByPeriod());
        this.router.get("/", this.getTransactionsByRecipient());
        this.router.get("/", this.getTransactionsBySender());
        this.router.get("/", this.getTransactionsByWallet());
        this.router.get("/", this.getTransactionsFromTo());
        this.router.get("/", this.addTransaction());
    }

    constructor(path: string) {
        super(path);
    }
    
    private getAllTransactions(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionController.getAllTransactions(request, response, next);
        };
    }

    private getTransactionsByAmount(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionController.getTransactionsByAmount(request, response, next);
        };
    }

    private getTransactionsByDate(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionController.getTransactionsByDate(request, response, next);
        };
    }

    private getTransactionsByPeriod(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionController.getTransactionsByPeriod(request, response, next);
        };
    }

    private getTransactionsByRecipient(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionController.getTransactionsByRecipient(request, response, next);
        };
    }

    private getTransactionsBySender(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionController.getTransactionsBySender(request, response, next);
        };
    }

    private getTransactionsByWallet(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionController.getTransactionsByWallet(request, response, next);
        };
    }

    private getTransactionsFromTo(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionController.getTransactionsFromTo(request, response, next);
        };
    }

    private addTransaction(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionController.addTransaction(request, response, next);
        };
    }
}