import { db } from "src/lib/photon";

export const create = async ({ user, body }) => {
  return await db().invoices.create({
    data: {
      User: { connect: { id: user.id } },
      body
    }
  });
};

export const findManyByUser = async ({ user }) => {
  return db().invoices.findMany({
    where: {
      User: user
    }
  });
};

export const latest = async ({ user }) => {
  return db().invoices.findMany({
    where: {
      User: user
    }
  });
};
