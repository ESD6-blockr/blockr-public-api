import { App } from "./app";
import DIContainer from "./injection/container";
import { AbstractRouter } from "./routers/abstractRouter";

const PORT = 3000;
const allRouters: AbstractRouter[] = DIContainer.getAll<AbstractRouter>("Routers");

new App(allRouters, PORT).start();
