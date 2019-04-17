import { Request, Response } from "express";
import { NextFunction } from "connect";

export class TransactionService {
    public async getTransactions(request: Request, response: Response, next: NextFunction) {
        if (request.query.amount != undefined) {
            console.log(request.query.amount);
        }

        if (request.query.date != undefined) {
            console.log(request.query.date);
        }

        // Example: /transactions?period_start=xxxxxx&period_end=xxxx
        if (request.query.period != undefined) {
            console.log(request.query.period_start);
            console.log(request.query.period_end);
        }

        if (request.query.recipient != undefined) {
            console.log(request.query.recipient);
        }

        if (request.query.sender != undefined) {
            console.log(request.query.sender);
        }

        if (request.query.signature != undefined) {
            console.log(request.query.signature);
        }

        if (request.query.route != undefined) {
            console.log(request.query.route);
        }

        next();
    }

    public async addTransaction(request: Request, response: Response, next: NextFunction) {
        throw new Error("addTransaction not implemented!");
        next();
    }
}

    // public async getTransactionsByAmount(request: Request, response: Response, next: NextFunction) {

    // public async getTransactionsByDate(request: Request, response: Response, next: NextFunction) {

    // public async getTransactionsByPeriod(request: Request, response: Response, next: NextFunction) {

    // public async getTransactionsByRecipient(request: Request, response: Response, next: NextFunction) {

    // public async getTransactionsBySender(request: Request, response: Response, next: NextFunction) {

    // public async getTransactionsBySignature(request: Request, response: Response, next: NextFunction) {

    // public async getTransactionsByRoute(request: Request, response: Response, next: NextFunction) {
