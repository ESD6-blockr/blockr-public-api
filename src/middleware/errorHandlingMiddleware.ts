import { NextFunction, Request, Response } from "express";
import { DataAccessLayerException } from "../utils/exceptions/dataAccessLayerException";

export function errorHandlingMiddleware(error: DataAccessLayerException,
                                        response: Response): void {
  const name = error.name;
  const message = error.message || "Something went wrong";
  response
    .status(500)
    .send({
      message,
      name,
    });
}
