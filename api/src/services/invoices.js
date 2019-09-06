import { db } from "src/lib/photon";

export const create = async ({ id, user, body }) => {
  const data = {
    User: { connect: { id: user.id } },
    body
  };
  return await db().invoices.upsert({
    where: { id },
    create: data,
    update: data
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
    return {};
  }
  return invoices[0];
};
