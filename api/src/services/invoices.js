import { db } from "src/lib/photon";

export const create = async ({ id, user, body }) => {
  return await db().invoices.upsert({
    where: { id },
    create: {
      User: { connect: { id: user.id } },
      body
    },
    update: {
      body
    }
  });
};

export const newest = async ({ user }) => {
  const invoices = await db().invoices.findMany({
    where: {
      User: user
    },
    orderBy: {
      createdAt: "asc"
    },
    first: 1
  });

  if (!invoices) {
    return null;
  }
  return invoices[0];
};
