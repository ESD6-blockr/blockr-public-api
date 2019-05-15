import { NextFunction, Request, Response } from "express";
import { DataAccessLayerException } from "../utils/exceptions/dataAccessLayerException";

export function errorHandlingMiddleware(error: DataAccessLayerException, request: Request,
                                        response: Response, next: NextFunction): void {
  const name = error.name;
  const message = error.message || "Something went wrong";
  request.getMaxListeners(); // UNUSED
  response
    .status(500)
    .send({
      message,
      name,
    });
  next();
}
