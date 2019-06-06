import { logger } from "@blockr/blockr-logger";
import { Request, Response } from "express";
import * as mocks from "node-mocks-http";
import { BlockService } from "../services";
import { dataAccessLayerMock, GET_BLOCKS_ERROR_MESSAGE } from "./constants/model.constants";

jest.mock("@blockr/blockr-logger");

let blockService: BlockService;

beforeEach(() => {
    blockService = new BlockService(dataAccessLayerMock);
});

describe("BlockService - getBlocksAsync", () => {
    let request: Request;
    let response: Response;

    beforeEach(() => {
        request = mocks.createRequest();
        response = mocks.createResponse();
    });

    it("should call getBlocksAsync on the data acces layer ", async () => {
        const next = () => { logger.info("test"); };

        spyOn(dataAccessLayerMock, "getBlocksByQueryAsync");

        await blockService.getBlocksAsync(request, response, next);
        
        expect(dataAccessLayerMock.getBlocksByQueryAsync).toHaveBeenCalled();
    });
    it("should fail if the data access layer throws an exception", async () => {
        const next = (error?: Error) => {
            expect(error).toBeDefined();
            if (error) {
                expect(error.message).toContain(GET_BLOCKS_ERROR_MESSAGE);
            }
        };
        
        request.query = {
            test: "test",
        };

        await blockService.getBlocksAsync(request, response, next);
    });
});
