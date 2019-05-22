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

            response.send(await this.dataAccessLayer.addTransactionAsync(request.body as Transaction));

            next();
        } catch (error) {
            logger.error(error);
            next(new DataAccessLayerException(error.name, error.message));
        }
    }

    public async getTransactionsAsync(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            logger.info(JSON.stringify(request.query));
            response.send(await this.getTransactionsByQueryAsync(request.query));
            next();
        } catch (error) {
            logger.error(error);
            next(new DataAccessLayerException(error.name, error.message));
        }
    }

    private async getTransactionsByQueryAsync(queries: object): Promise<Transaction[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting transactions by an optional filter.");
                resolve(await this.dataAccessLayer.getTransactionsByQueryAsync(queries));
            } catch (error) {
                logger.error(error.message);

                reject(new DataAccessLayerException(error.name, error.message));
            }
        });
    }
}

