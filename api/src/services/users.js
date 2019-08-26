import { db } from "src/lib/photon";

export const findOrCreate = async ({ email }) => {
  return await db().users.upsert({
    where: { email },
    update: { email },
    create: { email }
  });
};
