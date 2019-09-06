import { graphQLServerlessFunction } from "@hammerframework/hammer-api";
import { getAccessToken } from "src/lib/auth0";

import { users } from "src/services";

const server = graphQLServerlessFunction({
  context: async ({ event, context, callback }) => {
    return {
      currentUser: async () => {
        try {
          const accessToken = await getAccessToken(event.headers);
          return users.findOrCreate(accessToken);
        } catch (e) {
          throw new Error("You are not authenticated");
        }
      }
    };
  }
});

export const handler = server.createHandler();
