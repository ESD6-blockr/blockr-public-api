import { AbstractRouter } from "./abstractrouter";
import { TransactionService } from "../services";
import { NextFunction, Request, Response } from "express-serve-static-core";

export class TransactionRouter extends AbstractRouter {

    transactionService: TransactionService;

    public configure(): void {
        this.transactionService = new TransactionService();
        this.router.get("/transactions", this.getAllTransactions());
        this.router.get("/", this.getTransactionsByAmount());
        this.router.get("/", this.getTransactionsByDate());
        this.router.get("/", this.getTransactionsByPeriod());
        this.router.get("/", this.getTransactionsByRecipient());
        this.router.get("/", this.getTransactionsBySender());
        this.router.get("/", this.getTransactionsByWallet());
        this.router.get("/", this.getTransactionsFromTo());
        this.router.post("/transactions", this.addTransaction());
    }

    constructor(path: string) {
        super(path);
    }
    
    private getAllTransactions(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.getAllTransactions(request, response, next);
        };
    }

    private getTransactionsByAmount(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.getTransactionsByAmount(request, response, next);
        };
    }

    private getTransactionsByDate(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.getTransactionsByDate(request, response, next);
        };
    }

    private getTransactionsByPeriod(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.getTransactionsByPeriod(request, response, next);
        };
    }

    private getTransactionsByRecipient(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.getTransactionsByRecipient(request, response, next);
        };
    }

    private getTransactionsBySender(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.getTransactionsBySender(request, response, next);
        };
    }

    private getTransactionsByWallet(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.getTransactionsByWallet(request, response, next);
        };
    }

    private getTransactionsFromTo(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.getTransactionsFromTo(request, response, next);
        };
    }

    private addTransaction(): (request: Request, response: Response, next: NextFunction) => any {
        return (request: Request, response: Response, next: NextFunction) => {
            this.transactionService.addTransaction(request, response, next);
        };
    }
}