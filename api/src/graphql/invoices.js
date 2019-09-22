import { extendType, objectType, stringArg } from 'nexus'

const Invoice = objectType({
  name: 'Invoice',
  definition (t) {
    t.string('id')
    t.string('body')
    t.string('createdAt')
    t.string('updatedAt')
  },
})

// optionalChaining

export const invoiceSave = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('invoiceSave', {
      type: Invoice,
      args: {
        id: stringArg(),
        body: stringArg({ required: true }),
      },
      async resolve (_root, { id, body }, { currentUser, photon }) {
        const user = await currentUser()

        if (id) {
          return photon.invoices.update({
            where: {
              id,
            },
            data: {
              User: { connect: { id: user.id } },
              body,
            },
          })
        } else {
          return photon.invoices.create({
            data: {
              User: { connect: { id: user.id } },
              body,
            },
          })
        }
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
        id: stringArg(),
      },
      nullable: true,
      async resolve (_root, { id }, { currentUser, photon }) {
        const invoices = await photon.invoices.findMany({
          where: {
            id,
            User: await currentUser(),
          },
          orderBy: {
            createdAt: 'asc',
          },
          first: 1,
        })
        return invoices?.[0]
      },
    })
  },
})
