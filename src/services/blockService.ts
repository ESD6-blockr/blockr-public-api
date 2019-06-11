import { DataAccessLayer } from "@blockr/blockr-data-access";
import { logger } from "@blockr/blockr-logger";
import { Block } from "@blockr/blockr-models";
import { NextFunction } from "connect";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { DataAccessLayerException } from "../exceptions";

@injectable()
export class BlockService {
    protected dataAccessLayer: DataAccessLayer;

    constructor(@inject(DataAccessLayer) dataAccessLayer: DataAccessLayer) {
        this.dataAccessLayer = dataAccessLayer;
    }

    public async getBlocksAsync(request: Request, response: Response, next: NextFunction) {
        try {
            response.send(await this.getBlocksByQueryAsync(request.query));
            next();
        } catch (error) {
            logger.error(error);
            next(error);
        }
    }

    private async getBlocksByQueryAsync(queries: object): Promise<Block[]> {
        return new Promise(async (resolve, reject) => {
            try {
                logger.info("Getting blocks by an optional filter.");

                resolve(await this.dataAccessLayer.getBlocksByQueryAsync(queries));
            } catch (error) {
                logger.error(error.message);

                reject(new DataAccessLayerException(error.name, error.message));
            }
        });
    }
}
