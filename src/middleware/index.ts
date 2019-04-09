import { handleCors } from "./corsHandler";
import { handleBodyRequestParsing } from "./jsonParser";
import { handleCompression } from "./compressionHandler";
  
export default [handleCors, handleBodyRequestParsing, handleCompression];