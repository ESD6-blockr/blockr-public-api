import * as express from "express";
import middleware from "./middleware";
import { AbstractRouter } from "./routers/abstractrouter";

export class App {

    private port: number;
    private routers: AbstractRouter[];

    constructor(routers: AbstractRouter[], port: number) {
        this.routers = routers;
        this.port = port;
    }

    public start(): void {
        const server = this.initializeServer(express(), this.routers);
        server.listen(this.port, () => {
            console.log(`server is running at http://localhost:${this.port}`);
        })
    }

    private initializeServer(server: express.Express, routers: AbstractRouter[]): express.Application {
        server.use(middleware);
        routers.map((router: AbstractRouter) => {
            router.configure();
            server.use(router.path, router.router);
        });
        return server;
    }
}