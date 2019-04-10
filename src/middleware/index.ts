import * as cors from "cors";
import * as compression from "compression";
import * as parser from "body-parser";
  
export default [cors({ credentials: true, origin: true }), parser.urlencoded({ extended: true }), parser.json(), compression()];