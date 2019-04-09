import { Router } from "express";
import * as cors from "cors";

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));