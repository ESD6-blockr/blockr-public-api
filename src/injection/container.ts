import { DataAccessLayer, DataSource, IClientConfiguration, MongoDBConfiguration } from "@blockr/blockr-data-access";
import { Container } from "inversify";
import { BlockRouter, TransactionRouter } from "../routers";
import { AbstractRouter } from "../routers/abstractRouter";
import { BlockService, TransactionService } from "../services";
import { RpcTransactionService } from "../services/rpcTransactionService";

/**
 * Composition root
 */

/**
 * Dependency container
 */
const DIContainer = new Container({ skipBaseClassChecks: true });

// Bind transients
DIContainer.bind<DataAccessLayer>(DataAccessLayer).toSelf().inTransientScope();

DIContainer.bind<BlockService>(BlockService).toSelf().inTransientScope();
DIContainer.bind<TransactionService>(TransactionService).toSelf().inTransientScope();
DIContainer.bind<RpcTransactionService>(RpcTransactionService).toSelf().inTransientScope();

DIContainer.bind<AbstractRouter>("Routers").to(BlockRouter).inTransientScope();
DIContainer.bind<AbstractRouter>("Routers").to(TransactionRouter).inTransientScope();

// Bind singletons
DIContainer.bind<DataSource>("DataSource").toConstantValue(DataSource.MONGO_DB);
DIContainer.bind<IClientConfiguration>("Configuration")
    .toConstantValue(new MongoDBConfiguration(`mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}`,
        `${process.env.MONGODB_DATABASE}`));

export default DIContainer;
