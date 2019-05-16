import { NextFunction, Request, Response } from "express";
import { DataAccessLayerException } from "../utils/exceptions/dataAccessLayerException";

export function errorHandlingMiddleware(error: DataAccessLayerException, request: Request,
                                        response: Response, next: NextFunction): void {
  const status: number = 500;
  const name = error.name;
  const message = error.message || "Something went wrong";
  request.getMaxListeners(); // UNUSED
  response
    .status(status)
    .send({
      message,
      name,
    });
  next();
}
