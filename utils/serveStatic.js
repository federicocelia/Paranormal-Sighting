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
  const ext = path.extname(pathToResource);

  const contentType = getContentType(ext);

  try {
    const content = await fs.readFile(pathToResource);
    sendResponse(res, 200, contentType, content);
  } catch (err) {
    if (err.code === "ENOENT") {
      const content = await fs.readFile(path.join(publicDir, "404.html"));
      sendResponse(res, 404, contentType, content);
    } else {
      const content = `<html><h1>Server Error: ${err.code}</h1></html>`;
      sendResponse(res, 500, "text/html", content);
    }
    console.log(err);
  }
}
