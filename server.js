import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
import { serveStatic } from "./utils/serveStatic.js";

const PORT = 8000;

const __dirname = import.meta.dirname;

console.log(__dirname);

const server = http.createServer(async (req, res) => {
  const pathToResource = serveStatic(__dirname);

  const content = await fs.readFile(pathToResource, "utf8");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(content);
});

server.listen(PORT, () => {
  console.log(`Connected on port : ${PORT}`);
});
