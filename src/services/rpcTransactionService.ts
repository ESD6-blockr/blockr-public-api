import { Transaction } from "@blockr/blockr-models";
import { loadSync } from "@grpc/proto-loader";
import { credentials, loadPackageDefinition } from "grpc";
import { injectable } from "inversify";

const PROTOCOL_PATH = __dirname + `/../utils/transactions.proto`;
const HOST = "127.0.0.1";
const PORT = "5678";

@injectable()
export class RpcTransactionService {
    // No type exists for these proporties as it is defined in the protocol (.proto) file, hence any.
    private transactionProto: any;
    private client: any;

    constructor() {
        const packageDefinition = loadSync(
            PROTOCOL_PATH,
            {
                defaults: true,
                enums: String,
                keepCase: true,
                longs: String,
                oneofs: true,
            });
        this.transactionProto = loadPackageDefinition(packageDefinition).transactions;
        this.client = new this.transactionProto.TransactionRpcService(`${HOST}:${PORT}`,
                                                                        credentials.createInsecure());
    }

    public addTransaction(transaction: Transaction) {
        this.client.addTransaction(transaction);
    }
}
