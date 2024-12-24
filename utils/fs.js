import { promises as fs } from "fs";

type Tuple = [string, unknown];
const readFile = async (
  filePath: string,
  isParsed: boolean
): Promise<Tuple | null> => {
  if (!filePath) return null;
  const readData = await fs.readFile(filePath, "utf-8");
  return isParsed ? JSON.parse(readData) : readData;
};

const writeFile = async (
  filePath: string,
  data: unknown,
  isStringify: boolean
) => {
  if (!filePath || !data) return null;
  await fs.writeFile(filePath, isStringify ? JSON.stringify(data) : data);
  console.log("writed successfully");
};

module.exports = { readFile, writeFile };
