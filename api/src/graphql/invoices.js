import {
  queryField,
  mutationField,
  objectType,
  stringArg,
  inputObjectType,
} from 'nexus'

const Invoice = objectType({
  name: 'Invoice',
  definition(t) {
    t.string('id')
    t.string('body')
    t.string('date')
    t.string('invoiceNumber')
    t.string('createdAt')
    t.string('updatedAt')
  },
})

export const InvoiceSaveInput = inputObjectType({
  name: 'InvoiceSaveInput',
  definition(t) {
    t.string('id')
    t.string('date', { required: true })
    t.string('invoiceNumber', { required: true })
    t.string('body', { required: true })
  },
})

export const setInvoice = mutationField('setInvoice', {
  type: Invoice,
  args: {
    input: InvoiceSaveInput,
  },
  resolve: async (_root, { input }, { currentUser, photon }) => {
    const user = await currentUser()
    if (input.id) {
      return photon.invoices.update({
        where: {
          id: input.id,
        },
        data: {
          user: { connect: { id: user.id } },
          ...input,
        },
      })
    } else {
      return photon.invoices.create({
        data: {
          user: { connect: { id: user.id } },
          ...input,
        },
      })
    }
  },
})

export const getInvoiceList = queryField('getInvoiceList', {
  type: Invoice,
  list: true,
  nullable: true,
  args: {
    search: stringArg(),
  },
  resolve: async (_root, _args, { currentUser, photon }) => {
    return photon.invoices.findMany({
      where: {
        user: await currentUser(),
      },
      orderBy: {
        date: 'asc',
      },
    })
  },
})

export const getInvoice = queryField('getInvoice', {
  type: Invoice,
  args: {
    id: stringArg(),
  },
  resolve: async (_root, { id }, { currentUser, photon }) => {
    const invoices = await photon.invoices.findMany({
      where: {
        id,
        user: await currentUser(),
      },
      orderBy: {
        createdAt: 'asc',
      },
      first: 1,
    })
    return invoices?.[0]
  },
})
