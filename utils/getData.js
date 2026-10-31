import path from "node:path";
import fs from "node:fs/promises";

export async function getData() {
  const currentWorkingDir = process.cwd();

  const filepath = path.join(currentWorkingDir, "data", "data.json");

  try {
    const content = await fs.readFile(filepath, "utf8");
    return JSON.parse(content);
  } catch (err) {
    console.log(err);
    return [];
  }
}
