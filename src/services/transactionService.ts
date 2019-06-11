import { DataAccessLayer } from "@blockr/blockr-data-access";
import { logger } from "@blockr/blockr-logger";
import { Transaction } from "@blockr/blockr-models";
import { NextFunction } from "connect";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { DataAccessLayerException } from "../exceptions";
import { RpcTransactionService } from "./rpcTransactionService";

@injectable()
export class TransactionService {
    protected dataAccessLayer: DataAccessLayer;
    protected rpcTransactionService: RpcTransactionService;

    constructor(@inject(DataAccessLayer) dataAccessLayer: DataAccessLayer,
                @inject(RpcTransactionService) rpcTransactionService: RpcTransactionService) {
        this.dataAccessLayer = dataAccessLayer;
        this.rpcTransactionService = rpcTransactionService;
    }

    public async addTransactionAsync(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            logger.info("Adding transaction.");

            this.rpcTransactionService.addTransaction(request.body as Transaction);

            response.send("Transaction added succesfully");

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

