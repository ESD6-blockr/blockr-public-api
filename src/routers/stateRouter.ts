import { NextFunction, Request, Response } from "express-serve-static-core";
import { inject, injectable } from "inversify";
import { StateService } from "../services";
import { AbstractRouter } from "./abstractRouter";

const ROUTE = "/states";

@injectable()
export class StateRouter extends AbstractRouter {

    private readonly stateService: StateService;

    constructor(@inject(StateService) stateService: StateService) {
        super(ROUTE);
        this.stateService = stateService;
    }

    public configure(): void {
        this.router.route("/:publicKey").get(this.getStateByPublicKey);
    }

    private getStateByPublicKey(): (request: Request, response: Response, next: NextFunction) => void {
        return (request: Request, response: Response, next: NextFunction) => {
            this.stateService.getStateByPublicKey(request, response, next);
        };
    }
}
