import "reflect-metadata";

import { logger } from "@blockr/blockr-logger";
import * as Sentry from "@sentry/node";
import * as express from "express";
import { injectable } from "inversify";
import DIContainer from "./injection/container";
import middleware from "./middleware";
import { AbstractRouter } from "./routers/abstractRouter";

@injectable()
export class App {
    private readonly port: number;
    private readonly routers: AbstractRouter[];

    constructor(port: number) {
        this.routers = DIContainer.getAll<AbstractRouter>("Routers");
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
