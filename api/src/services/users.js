import { db } from "src/lib/photon";

export const findOrCreate = async ({ sub }) => {
  const { id, user } = await db().accessTokens.upsert({
    where: { sub },
    update: { sub },
    create: { sub },
    select: {
      id: true,
      sub: true,
      user: true
    }
  });

  if (user) {
    return user;
  }

  // If the user is null then we have to create one.
  // Ordinarily we would fetch a normalized standard identifier
  // like the email address, but for now we'll just stick to
  // one account per identity service.
  // https://auth0.com/docs/users/normalized/auth0/identify-users
  const newUser = await db().users.create({
    data: {
      accessTokens: {
        connect: { id: id }
      }
    }
  });
  return newUser;
};
