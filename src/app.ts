import * as http from "http";
import * as express from "express";
import { applyMiddleware } from "./utils";
import middleware from "./middleware";
import { BlockRouter } from "./routers/blockRouter";

// const router = express();
const blockRouter = new BlockRouter("block");
applyMiddleware(middleware, blockRouter.router);

const { PORT = 3000 } = process.env;
const server = http.createServer(blockRouter.router);// http.createServer(router);
// const server2 = http.createServer(blockRouter.router);

server.listen(PORT, () => {
    console.log("server is running at http://localhost:" + PORT);
});