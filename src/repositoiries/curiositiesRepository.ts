import prisma from "../database/db.js";

import {
  CuriositiesInsert,
  CuriositiesUpdate,
} from "../protocols/curiositiesProtocol";

export function fetchCuriosities() {
  return prisma.curiosities.findMany({ orderBy: { createdAt: "desc" } });
}

export function fetchCuriosityById(curiosityId: number) {
  return prisma.curiosities.findUnique({ where: { id: curiosityId } });
}

export function fetchCuriositiesByClassification(classificationsId: number) {
  return prisma.curiosities.findMany({
    where: { classificationsId },
    orderBy: { createdAt: "desc" },
  });
}

export function insertACuriosity(curiosity: CuriositiesInsert) {
  return prisma.curiosities.create({ data: curiosity });
}

export function updateCuriosity(
  editedCuriosity: CuriositiesUpdate,
  curiosityId: number
) {
  return prisma.curiosities.update({
    where: { id: curiosityId },
    data: editedCuriosity,
  });
}

export function deleteCuriosity(curiosityId: number) {
  return prisma.curiosities.delete({ where: { id: curiosityId } });
}
