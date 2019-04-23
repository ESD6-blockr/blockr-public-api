import { App } from "./app";
import DIContainer from "./injection/container";
import { BlockRouter, TransactionRouter } from "./routers";
import { AbstractRouter } from "./routers/abstractrouter";

const PORT = 3000;
const allRouters: AbstractRouter[] = DIContainer.getAll<AbstractRouter>("Routers");

new App(allRouters, PORT).start();
