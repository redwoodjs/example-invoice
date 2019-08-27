import { extendType, objectType, stringArg } from "nexus";

import { invoices } from "src/services";

export const Invoice = objectType({
  name: "Invoice",
  definition(t) {
    t.int("id");
    t.string("body");
    t.string("createdAt");
    t.string("updatedAt");
  }
});

export const extendMutation = extendType({
  type: "Mutation",
  definition: t => {
    t.field("invoicesCreate", {
      type: Invoice,
      args: { body: stringArg({ required: true }) },
      async resolve(_root, { body }, { currentUser }) {
        const user = await currentUser();
        return invoices.create({ user, body });
      }
    });
  }
});

export const extendQuery = extendType({
  type: "Query",
  definition: t => {
    t.list.field("invoicesNewest", {
      type: "Invoice",
      nullable: true,
      async resolve(_root, _args, { currentUser }) {
        const user = await currentUser();
        return invoices.newest({ user });
      }
    });
  }
});
