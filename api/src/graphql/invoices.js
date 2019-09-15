import { extendType, objectType, stringArg, intArg } from 'nexus'

const Invoice = objectType({
  name: 'Invoice',
  definition (t) {
    t.int('id')
    t.string('body')
    t.string('createdAt')
    t.string('updatedAt')
  },
})

export const invoiceCreate = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('invoiceCreate', {
      type: Invoice,
      args: { body: stringArg({ required: true }) },
      async resolve (_root, { body }, { currentUser, photon }) {
        const user = await currentUser()
        return await photon().invoices.create({
          data: {
            User: { connect: { id: user.id } },
            body,
          },
        })
      },
    })
  },
})

export const invoiceUpdate = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('invoiceUpdate', {
      type: Invoice,
      args: {
        id: intArg({ required: true }),
        body: stringArg({ required: true }),
      },
      async resolve (_root, { id, body }, { currentUser, photon }) {
        const user = await currentUser()
        return await photon().invoices.update({
          where: {
            id,
            User: user,
          },
          data: {
            body,
          },
        })
      },
    })
  },
})

// TODO: Pagination
export const invoices = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('invoices', {
      type: 'Invoice',
      nullable: true,
      async resolve (_root, _args, { currentUser, photon }) {
        return photon.invoices.findMany({
          where: {
            User: await currentUser(),
          },
          orderBy: {
            createdAt: 'asc',
          },
        })
      },
    })
  },
})

export const invoice = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('invoice', {
      type: 'Invoice',
      args: {
        id: intArg({ required: true }),
      },
      nullable: true,
      async resolve (_root, { id }, { currentUser, photon }) {
        return photon.invoices.fineOne({
          where: {
            id,
            User: await currentUser(),
          },
        })
      },
    })
  },
})
