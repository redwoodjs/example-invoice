import { graphQLServerlessFunction } from "@hammerframework/hammer-api";
import { getCurrentUser } from "src/lib/auth0";

const createHandler = async (event, context, callback) => {
  const currentUser = await getCurrentUser(event);

  const server = graphQLServerlessFunction({
    context: {
      currentUser: () => {
        if (currentUser === null) {
          throw new Error("You are not authenticated.");
        }
        return currentUser;
      }
    }
  });

  return server.createHandler();
};

export const handler = (event, context, callback) => {
  createHandler(event).then(handler => handler(event, context, callback));
};
