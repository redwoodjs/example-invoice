import { extendType, objectType, mutationField, stringArg } from "nexus";

import { invoices } from "src/services";

export const Invoice = objectType({
  name: "Invoice",
  definition(t) {
    t.int("id");
    t.string("body");
  }
});

export const extendMutation = extendType({
  type: "Mutation",
  definition: t => {
    t.field("invoicesCreate", {
      type: Invoice,
      args: { body: stringArg({ required: true }) },
      resolve(_root, { body }, { currentUser }) {
        return invoices.create({ user: currentUser(), body });
      }
    });
  }
});

export const extendQuery = extendType({
  type: "Query",
  definition: t => {
    t.list.field("invoices", {
      type: "Invoice",
      nullable: true,
      resolve(_root, _args, { currentUser }) {
        return invoices.findManyByUser({ user: currentUser() });
      }
    });
  }
});
