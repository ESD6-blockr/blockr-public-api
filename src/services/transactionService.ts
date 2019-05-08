import { DataAccessLayer } from "@blockr/blockr-data-access";
import { logger } from "@blockr/blockr-logger";
import { Transaction } from "@blockr/blockr-models";
import { NextFunction } from "connect";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { DataAccessLayerException } from "../utils/exceptions/dataAccessLayerException";

@injectable()
export class TransactionService {
    protected dataAccessLayer: DataAccessLayer;

    constructor(@inject(DataAccessLayer) dataAccessLayer: DataAccessLayer) {
        this.dataAccessLayer = dataAccessLayer;
    }

    public async addTransactionAsync(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            logger.info("Adding transaction.");

            response.send(await this.dataAccessLayer.addTransactionAsync(request.body));

            next();
        } catch (error) {
            logger.error(error);
            next(new DataAccessLayerException(error.name, error.message));
        }
    }

    public async getTransactionsAsync(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            response.send(
            request.query.amount !== undefined ? await this.getTransactionsByAmountAsync(request.query.amount)
            : request.query.period_start !== undefined && request.query.period_end !== undefined
                ? await this.getTransactionsByDatePeriodAsync(request.query.period_start, request.query.period_end)
            : request.query.sender !== undefined && request.query.recipient !== undefined
                ? await this.getTransactionsBySenderToRecipientAsync(request.query.sender, request.query.recipient)
            : request.query.sender !== undefined ? await this.getTransactionsBySenderAsync(request.query.sender)
            : request.query.recipient !== undefined
                ? await this.getTransactionsByRecipientAsync(request.query.recipient)
            : await this.getAllTransactionsAsync());

            next();
        } catch (error) {
            logger.error(error);
            next(new DataAccessLayerException(error.name, error.message));
        }
    }

    private async getTransactionsByAmountAsync(amount: number): Promise<Transaction[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting transactions by amount.");

                resolve(await this.dataAccessLayer.getTransactionsByAmountAsync(amount));
            } catch (error) {
                logger.error(error.message);

                reject(new DataAccessLayerException(error.name, error.message));
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

                reject(new DataAccessLayerException(error.name, error.message));
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

                reject(new DataAccessLayerException(error.name, error.message));
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

                reject(new DataAccessLayerException(error.name, error.message));
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

                reject(new DataAccessLayerException(error.name, error.message));
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

                reject(new DataAccessLayerException(error.name, error.message));
            }
        });
    }
}

