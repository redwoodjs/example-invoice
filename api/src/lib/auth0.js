import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import dotenv from "dotenv";
import { getHammerBaseDir } from "@hammerframework/hammer-core";

dotenv.config({ path: `${getHammerBaseDir()}/.env` });

const tokenFromHeaders = ({ authorization }) => {
  if (!authorization) {
    throw new Error(
      "cannot get token, headers do not contain an `Authorization` part."
    );
  }
  return authorization.split(" ")[1];
};

// https://auth0.com/docs/api-auth/tutorials/verify-access-token
const decodeVerifiedToken = token => {
  return new Promise((resolve, reject) => {
    const jwksUri = `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`;
    const { AUTH0_DOMAIN, AUTH0_AUDIENCE, AUTH0_KID } = process.env;

    if (!AUTH0_KID) {
      throw new Error(`"AUTH0_KID" env var not set, get it from: ${jwksUri}`);
    }

    if (!AUTH0_DOMAIN || !AUTH0_AUDIENCE) {
      throw new Error(
        "`AUTH0_DOMAIN` and `AUTH0_AUDIENCE` env vars are not set"
      );
    }

    const client = jwksClient({
      cache: true,
      rateLimit: true,
      jwksUri
    });

    client.getSigningKey(process.env.AUTH0_KID, (keyError, { publicKey }) => {
      if (keyError) {
        return reject(keyError);
      }

      jwt.verify(
        token,
        publicKey,
        {
          algorithms: ["RS256"],
          audience: AUTH0_AUDIENCE,
          issuer: `https://${process.env.AUTH0_DOMAIN}/`
        },
        (verifyError, decoded) => {
          if (verifyError) {
            return reject(verifyError);
          }
          resolve(decoded);
        }
      );
    });
  });
};

// https://auth0.com/docs/api-auth/tutorials/verify-access-token
export const getAccessToken = headers => {
  const rawToken = tokenFromHeaders(headers);
  return decodeVerifiedToken(rawToken);
};
