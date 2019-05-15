import { logger } from "@blockr/blockr-logger";
import * as Sentry from "@sentry/node";
import * as express from "express";
import middleware from "./middleware";
import { AbstractRouter } from "./routers/abstractRouter";

export class App {
    private port: number;
    private routers: AbstractRouter[];

    constructor(routers: AbstractRouter[], port: number) {
        this.routers = routers;
        this.port = port;

        this.initSentry();
    }

    public start(): void {
        
        const server = this.initializeServer(express(), this.routers);
        server.listen(this.port, () => {
            logger.info(`Server is running at 0.0.0.0:${this.port}`);
        });
    }

    private initializeServer(server: express.Express, routers: AbstractRouter[]): express.Application {
        server.use(middleware);
        for (const router of routers) {
            router.configure();
            server.use(router.path, router.router);
        }
        return server;
    }

    private initSentry(): void {
        Sentry.init({
            dsn: process.env.SENTRY_DSN,
            environment: process.env.SENTRY_ENVIRONMENT,
        });
    }
}
