import { DataAccessLayer } from "@blockr/blockr-data-access";
import { NextFunction } from "connect";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { HttpException } from "../utils/exceptions/httpException";
import logger from "../utils/logger";

@injectable()
export class BlockService {
    protected dataAccessLayer: DataAccessLayer;

    constructor(@inject(DataAccessLayer) dataAccessLayer: DataAccessLayer) {
        this.dataAccessLayer = dataAccessLayer;
    }

    public async getBlocks(request: Request, response: Response, next: NextFunction) {
        try {
            response.send(
                request.query.number !== undefined ? await this.getBlocksByNumber(request.query.number)
                : request.query.hash !== undefined ? await this.getBlocksByHash(request.query.hash)
                : request.query.period_start !== undefined && request.query.period_end !== undefined
                 ? await this.getBlocksByDatePeriod(request.query.period_start, request.query.period_end)
                : await this.getAllBlocks());
            next();
        } catch (error) {
            logger.error(error);
            next(error);
        }
    }

    private async getAllBlocks() {
        throw new HttpException("riperree, riperooo", 500);
        // this.dataAccessLayer.get
    }

    private async getBlocksByNumber(number: string) {

    }

    private async getBlocksByHash(hash: string) {

    }

    private async getBlocksByDatePeriod(startDate: string, endDate: string) {

    }

    // private async getPreviousBlock(){

    // }
}
