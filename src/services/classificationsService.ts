import { error_conflict } from "../errors/conflictError.js";
import {
  fetchClassificationByName,
  fetchClassifications,
  insertAClassification,
} from "../repositoiries/classificationsRepository.js";

export async function selectClassifications() {
  const listClassifications = await fetchClassifications();
  return listClassifications;
}

export async function checkIfClassificationExists(name: string) {
  const classificationExist = await fetchClassificationByName(name);

  if (classificationExist) throw error_conflict("classification");
}

export async function insertClassification(name: string) {
  await insertAClassification(name);
}
