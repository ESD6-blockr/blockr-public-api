import { Router } from "express";

export abstract class AbstractRouter {
    public path: string;
    public router: Router;

    constructor(path: string) {
        this.path = path;
        this.router = Router();
    }

    public abstract configure(): void;
}

