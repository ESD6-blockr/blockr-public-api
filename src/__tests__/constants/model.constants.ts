import { DataAccessLayer } from "@blockr/blockr-data-access";
import { Block, BlockHeader, BlockType, Transaction, TransactionType } from "@blockr/blockr-models";
import { RpcTransactionService } from "../../services/rpcTransactionService";

export const GET_BLOCKS_ERROR_MESSAGE = "Blocks not found.";
export const GET_TRANSACTIONS_ERROR_MESSAGE = "Transactions not found.";
export const ADD_TRANSACTION_ERROR_MESSAGE = "Transaction required.";

export const getBlocks = () => {
    return new Set()
        .add(
            new Block(
                new BlockHeader(
                    "1.0.0",
                    1,
                    new Date(),
                    1,
                ),
                new Set(),
                BlockType.GENESIS,
            ));
};

export const getTransactions = () => {
    return new Set()
        .add(
            new Transaction(
                TransactionType.COIN,
                "RECIPIENT_KEY_TEST",
                "SENDER_KEY_TEST",
                1,
                new Date(),
            ),
        );
};

export const dataAccessLayerMock = {
    async getTransactionsByQueryAsync(queries: object) {
        if (Object.keys(queries).length > 0 ) {
            throw new Error(GET_TRANSACTIONS_ERROR_MESSAGE);
        }
        return getTransactions();
    },
    async getBlocksByQueryAsync(queries: object) {
        if (Object.keys(queries).length > 0 ) {
            throw new Error(GET_BLOCKS_ERROR_MESSAGE);
        }
        return getBlocks();
    },
} as unknown as DataAccessLayer;

export const rpcTransactionService = {
    async addTransaction(transaction: Transaction) {
        if (!(transaction instanceof Transaction)) {
            throw new Error(ADD_TRANSACTION_ERROR_MESSAGE);
        }
    },
} as unknown as RpcTransactionService;

