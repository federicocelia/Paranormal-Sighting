import path from "node:path";

export function serveStatic(directory) {
  const filePath = path.join(directory, "public", "index.html");
  return filePath;
}
