import * as parser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import { errorHandlingMiddleware } from "./errorHandlingMiddleware";

  
export default [
    cors({ credentials: true, origin: true }),
    parser.urlencoded({ extended: true }),
    parser.json(), compression(),
    errorHandlingMiddleware];
