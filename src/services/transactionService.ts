import { NextFunction } from "connect";
import { Request, Response } from "express";

export class TransactionService {

    public async addTransaction(request: Request, response: Response, next: NextFunction) {
        throw new Error("addTransaction not implemented!");
        next();
    }

    public async getTransactions(request: Request, response: Response, next: NextFunction) {
        response.send(
        request.query.amount !== undefined ? this.getTransactionsByAmount(request.query.amount)
        : request.query.period_start !== undefined
        && request.query.period_end !== undefined
        ? this.getTransactionsByDatePeriod(request.query.period_start, request.query.period_end)
        : request.query.sender !== undefined ? this.getTransactionsBySender(request.query.sender)
        : request.query.signature !== undefined ? this.getTransactionsBySignature(request.query.signature)
        : request.query.route_sender !== undefined
        && request.query.route_recipient !== undefined
        ? this.getTransactionsBySenderToRecipient(request.query.route_sender, request.query.route_recipient)
        : this.getAllTransactions());

        next();
    }

    private async getTransactionsByAmount(amount: string) {}

    private async getTransactionsByDatePeriod(startDate: string, endDate: string) {}

    private async getTransactionsBySender(sender: string) {}

    private async getTransactionsBySignature(signature: string) {}

    private async getTransactionsBySenderToRecipient(sender: string, receiver: string) {}

    private async getAllTransactions() {}
}

