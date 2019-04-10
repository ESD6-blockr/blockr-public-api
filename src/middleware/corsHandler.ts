import { NextFunction, Request, Response } from "express";
import * as cors from "cors";

export const handleCors = (request: Request, response: Response, next: NextFunction) => {
  cors({ credentials: true, origin: true });
  next();
};