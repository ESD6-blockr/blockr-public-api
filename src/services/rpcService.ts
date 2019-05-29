import { Transaction } from "@blockr/blockr-models";
import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "grpc";
import { injectable } from "inversify";

const PROTO_PATH = __dirname + "/../../utils/route_guide.proto";

@injectable()
export class RpcService {
    private transactionProto: any;
    private client: any;

    constructor() {
        const packageDefinition = protoLoader.loadSync(
            PROTO_PATH,
            {
                defaults: true,
                enums: String,
                keepCase: true,
                longs: String,
                oneofs: true,
            });
        this.transactionProto = grpc.loadPackageDefinition(packageDefinition).transactions;
        this.client = new this.transactionProto.transactionRpcService("localhost", grpc.credentials.createInsecure());
    }

    public addTransaction(transaction: Transaction) {
        this.client.addTransaction(transaction);
    }
}
