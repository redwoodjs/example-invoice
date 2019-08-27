import { db } from "src/lib/photon";

export const create = async ({ user, body }) => {
  return await db().invoices.create({
    data: {
      User: { connect: { id: user.id } },
      body
    }
  });
};

export const newest = async ({ user }) => {
  return db().invoices.findMany({
    where: {
      User: user
    },
    orderBy: {
      createdAt: "asc"
    }
  });
};
