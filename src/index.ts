import { App } from "./app";
import { BlockRouter } from "./routers/blockRouter";

const PORT = 3000;
const routers = [new BlockRouter("/blocks")];

new App(routers, PORT).start();