import * as compression from "compression";
import { Router } from "express";

export const handleCompression = (router: Router) => 
    router.use(compression());