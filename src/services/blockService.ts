import { DataAccessLayer } from "@blockr/blockr-data-access";
import { Block } from "@blockr/blockr-models";
import { NextFunction } from "connect";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import logger from "../utils/logger";

@injectable()
export class BlockService {
    protected dataAccessLayer: DataAccessLayer;

    constructor(@inject(DataAccessLayer) dataAccessLayer: DataAccessLayer) {
        this.dataAccessLayer = dataAccessLayer;
    }

    public async getBlocksAsync(request: Request, response: Response, next: NextFunction) {
        try {
            response.send(
                request.query.number !== undefined ? await this.getBlockByNumberAsync(request.query.number)
                : request.query.hash !== undefined ? await this.getBlocksByHashAsync(request.query.hash)
                : request.query.dateperiod_start !== undefined && request.query.dateperiod_end !== undefined
                ? await this.getBlocksByDatePeriodAsync(request.query.dateperiod_start, request.query.dateperiod_end)
                : request.query.parentHash !== undefined ? await this.getPreviousBlockAsync(request.query.parentHash)
                : await this.getAllBlocksAsync());
            next();
        } catch (error) {
            logger.error(error);
            next(error);
        }
    }

    private async getBlockByNumberAsync(numberBlock: number): Promise<Block> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting block by number.");

                resolve(await this.dataAccessLayer.getBlockAsync(numberBlock));
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }

    private async getBlocksByHashAsync(hash: string): Promise<Block[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting blocks by hash.");

                resolve(await this.dataAccessLayer.getBlocksByHashAsync(hash));
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }

    private async getBlocksByDatePeriodAsync(startDate: Date, endDate: Date): Promise<Block[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting blocks by date period.");

                resolve(await this.dataAccessLayer.getBlocksByDatePeriodAsync(startDate, endDate));
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }

    private async getAllBlocksAsync(): Promise<Block[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting blocks by date period.");

                resolve(await this.dataAccessLayer.getBlockchainAsync());
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }

    private async getPreviousBlockAsync(parentHash: string): Promise<Block> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting blocks by date period.");

                resolve(await this.dataAccessLayer.getPreviousBlockAsync(parentHash));
            } catch (error) {
                logger.error(error.message);

                reject(error);
            }
        });
    }
}
