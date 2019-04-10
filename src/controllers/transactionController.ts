import { Request, Response } from "express";
import { NextFunction } from "connect";

export class TransactionController {
    public async getAllTransactions(request: Request, response: Response, next: NextFunction) {
        throw new Error("getAllTransactions not implemented!");
        next();
    }

    public async getTransactionsByAmount(request: Request, response: Response, next: NextFunction) {
        throw new Error("getTransactionsByAmount not implemented!");
        next();
    }

    public async getTransactionsByDate(request: Request, response: Response, next: NextFunction) {
        throw new Error("getTransactionsByDate not implemented!");
        next();
    }

    public async getTransactionsByPeriod(request: Request, response: Response, next: NextFunction) {
        throw new Error("getTransactionsByPeriod not implemented!");
        next();
    }

    public async getTransactionsByRecipient(request: Request, response: Response, next: NextFunction) {
        throw new Error("getTransactionsByRecipient not implemented!");
        next();
    }

    public async getTransactionsBySender(request: Request, response: Response, next: NextFunction) {
        throw new Error("getTransactionsBySender not implemented!");
        next();
    }

    public async getTransactionsByWallet(request: Request, response: Response, next: NextFunction) {
        throw new Error("getTransactionsByWallet not implemented!");
        next();
    }

    public async getTransactionsFromTo(request: Request, response: Response, next: NextFunction) {
        throw new Error("getTransactionsFromTo not implemented!");
        next();
    }

    public async addTransaction(request: Request, response: Response, next: NextFunction) {
        throw new Error("addTransaction not implemented!");
        next();
    }
}