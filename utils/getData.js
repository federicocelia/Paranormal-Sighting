import path from "node:path";
import fs from "node:fs/promises";

export async function getData() {
  const curentWorkingDir = process.cwd();

  const filepath = path.join(curentWorkingDir, "data", "data.json");

  try {
    const content = await fs.readFile(filepath, "utf8");
    return JSON.parse(content);
  } catch (err) {
    console.log(err);
    return [];
  }
}
