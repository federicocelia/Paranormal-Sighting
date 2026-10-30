import path from "node:path";
import fs from "node:fs/promises";
import sendResponse from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export async function serveStatic(req, res, directory) {
  const publicDir = path.join(directory, "public");
  const pathToResource = path.join(
    publicDir,
    req.url === "/" ? "index.html" : req.url,
  );

  try {
    const content = await fs.readFile(pathToResource);
    const ext = path.extname(pathToResource);

    const contentType = getContentType(ext);
    sendResponse(res, 200, contentType, content);
  } catch (err) {
    console.log(err);
  }
}
