import { DataAccessLayer, DataSource, IClientConfiguration, MongoDBConfiguration } from "@blockr/blockr-data-access";
import { logger } from "@blockr/blockr-logger";
import { BlockHeader, Transaction } from "@blockr/blockr-models";
import { Container } from "inversify";
import { BlockRouter, TransactionRouter } from "../routers";
import { AbstractRouter } from "../routers/abstractrouter";
import { BlockService, TransactionService } from "../services";

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

DIContainer.bind<AbstractRouter>("Routers").to(BlockRouter).inTransientScope();
DIContainer.bind<AbstractRouter>("Routers").to(TransactionRouter).inTransientScope();

logger.info(process.env);
// Bind singletons
DIContainer.bind<DataSource>("DataSource").toConstantValue(DataSource.MONGO_DB);
DIContainer.bind<IClientConfiguration>("Configuration")
    .toConstantValue(new MongoDBConfiguration("mongodb://localhost:27017/", "database"));

export default DIContainer;
