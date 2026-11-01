import fs from "node:fs/promises";
import path from "node:path";
import { getData } from "./getData.js";

export async function addNewSighting(newSighting) {
  try {
    const data = await getData();
    data.push(newSighting);
    const sightingsString = JSON.stringify(data, null, 2);
    const pathToFile = path.join("data", "data.json");
    const content = await fs.writeFile(pathToFile, sightingsString, "utf8");
  } catch (err) {
    throw new Error(`Unable to upload the sighting error: ${err}`);
  }
}
