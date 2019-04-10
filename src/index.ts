import { App } from "./app";
import { BlockRouter, TransactionRouter } from "./routers";

const PORT = 3000;
const allRouters = [
    new BlockRouter("/blocks"),
    new TransactionRouter("/transactions")
];

new App(allRouters, PORT).start();