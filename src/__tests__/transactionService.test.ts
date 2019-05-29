import { DataAccessLayer } from "@blockr/blockr-data-access";
import { logger } from "@blockr/blockr-logger";
import { Request, Response } from "express";
import * as mocks from "node-mocks-http";
import { TransactionService } from "../services";
import { ADD_TRANSACTION_ERROR_MESSAGE, dataAccessLayerMock,
    GET_TRANSACTIONS_ERROR_MESSAGE, rpcTransactionService} from "./constants/model.constants";

jest.mock("@blockr/blockr-logger");

let transactionService: TransactionService;

beforeEach(() => {
    transactionService = new TransactionService(dataAccessLayerMock, rpcTransactionService);
});

describe("TransactionService - getTransactionsByQueryAsync", () => {
    let request: Request;
    let response: Response;

    beforeEach(() => {
        request = mocks.createRequest();
        response = mocks.createResponse();
    });

    it("should call getTransactionsByQueryAsync on the data acces layer ", async () => {
        const next = () => { logger.info("test"); };

        spyOn(dataAccessLayerMock, "getTransactionsByQueryAsync");

        await transactionService.getTransactionsAsync(request, response, next);

        expect(dataAccessLayerMock.getTransactionsByQueryAsync).toHaveBeenCalled();
    });
    it("should fail if the data access layer throws an exception", async () => {
        const next = (error?: Error) => {
            expect(error).toBeDefined();
            if (error) {
                expect(error.message).toContain(GET_TRANSACTIONS_ERROR_MESSAGE);
            }
        };

        request.query = {
            test: "test",
        };

        await transactionService.getTransactionsAsync(request, response, next);
    });
});

describe("TransactionService - addTransaction", () => {
    let request: Request;
    let response: Response;

    beforeEach(() => {
        request = mocks.createRequest();
        response = mocks.createResponse();
    });

    it("should call addTransaction on the validator", async () => {
        const next = () => { logger.info("test"); };

        request.body = {
            amount: 123,
            blockHash: "blockhash123",
            date: "1999-10-10",
            recipientKey: "recipientKey123",
            senderKey: "senderKey123",
            signature: "signature123",
            type: "COIN",
        };

        spyOn(rpcTransactionService, "addTransaction");

        await transactionService.addTransactionAsync(request, response, next);

        expect(rpcTransactionService.addTransaction).toHaveBeenCalled();
    });
    it("should fail if the validator throws an exception", async () => {
        const next = (error?: Error) => {
            expect(error).toBeDefined();
            if (error) {
                expect(error.message).toContain(ADD_TRANSACTION_ERROR_MESSAGE);
            }
        };

        await transactionService.addTransactionAsync(request, response, next);
    });
});
