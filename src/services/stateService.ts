import { DataAccessLayer } from "@blockr/blockr-data-access";
import { logger } from "@blockr/blockr-logger";
import { NextFunction } from "connect";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { DataAccessLayerException } from "../exceptions";

@injectable()
export class StateService {
    protected dataAccessLayer: DataAccessLayer;

    constructor(@inject(DataAccessLayer) dataAccessLayer: DataAccessLayer) {
        this.dataAccessLayer = dataAccessLayer;
    }

    public async getStateByPublicKey(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            logger.info(`Getting state by publicKey: ${request.params.publicKey}.`);
            response.send(await this.dataAccessLayer.getStateAsync(request.params.publicKey));
            next();
        } catch (error) {
            logger.error(error);
            next(new DataAccessLayerException(error.name, error.message));
        }
    }
}

