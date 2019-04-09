import * as express  from "express";

export abstract class AbstractRouter {
    public path: string;
    public router: express.Express;

    constructor(path: string) {
        this.path = path;
        this.router = express();
    }

    public abstract configure(): void;
}