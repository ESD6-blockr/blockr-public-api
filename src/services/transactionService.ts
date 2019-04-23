import { DataAccessLayer } from "@blockr/blockr-data-access";
import { Transaction } from "@blockr/blockr-models";
import { NextFunction } from "connect";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import logger from "../utils/logger";

@injectable()
export class TransactionService {
    protected dataAccessLayer: DataAccessLayer;

    constructor(@inject(DataAccessLayer) dataAccessLayer: DataAccessLayer) {
        this.dataAccessLayer = dataAccessLayer;
    }

    public async addTransactionAsync(request: Request, response: Response, next: NextFunction): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Adding transaction.");

                await this.dataAccessLayer.addTransactionAsync(request.body);

                resolve();
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }

    public async getTransactions(request: Request, response: Response, next: NextFunction) {
        response.send(
        request.query.amount !== undefined ? await this.getTransactionsByAmountAsync(request.query.amount)
        : request.query.period_start !== undefined
        && request.query.period_end !== undefined
        ? await this.getTransactionsByDatePeriodAsync(request.query.period_start, request.query.period_end)
        : request.query.sender !== undefined ? await this.getTransactionsBySenderAsync(request.query.sender)
        : request.query.recipient !== undefined ? await this.getTransactionsByRecipientAsync(request.query.recipient)
        : request.query.route_sender !== undefined
        && request.query.route_recipient !== undefined
        ? await this.getTransactionsBySenderToRecipientAsync(request.query.route_sender, request.query.route_recipient)
        : await this.getAllTransactionsAsync());

        next();
    }

    private async getTransactionsByAmountAsync(amount: number): Promise<Transaction[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting transactions by amount.");

                resolve(await this.dataAccessLayer.getTransactionsByAmountAsync(amount));
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }

    private async getTransactionsByDatePeriodAsync(startDate: Date, endDate: Date): Promise<Transaction[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting transactions by date period.");

                resolve(await this.dataAccessLayer.getTransactionsByDatePeriodAsync(startDate, endDate));
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }

    private async getTransactionsBySenderAsync(sender: string): Promise<Transaction[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting transactions by sender.");

                resolve(await this.dataAccessLayer.getTransactionsBySenderKeyAsync(sender));
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }

    private async getTransactionsByRecipientAsync(recipient: string): Promise<Transaction[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting transactions by recipient.");

                resolve(await this.dataAccessLayer.getTransactionsByRecipientKeyAsync(recipient));
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }

    private async getTransactionsBySenderToRecipientAsync(sender: string, recipient: string): Promise<Transaction[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting transactions by sender to recipient.");

                resolve(await this.dataAccessLayer.getTransactionsBySenderKeyToRecipientKeyAsync(sender, recipient));
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }

    private async getAllTransactionsAsync(): Promise<Transaction[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting all transactions.");

                resolve(await this.dataAccessLayer.getTransactionsAsync());
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }
}

