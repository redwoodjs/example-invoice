import { gql } from '@hammerframework/api'

export const schema = gql`
  type Invoice {
    id: ID!
    body: String!
    date: DateTime!
    invoiceNumber: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    getInvoice(id: ID): Invoice
    getInvoices(search: String!): [Invoice]
  }

  input InvoiceInput {
    id: ID!
    date: DateTime!
    invoiceNumber: String!
    body: String!
  }
  type Mutation {
    setInvoice(input: InvoiceInput!): Invoice
  }
`

export const resolvers = {
  Query: {
    getInvoice: async (_root, { id }, { currentUser, photon }) => {
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
    getInvoices: async (_root, _args, { currentUser, photon }) => {
      const user = await currentUser()
      return photon.invoices.findMany({
        where: {
          user,
        },
        orderBy: {
          date: 'asc',
        },
      })
    },
  },
  Mutation: {
    setInvoice: async (_root, { input }, { currentUser, photon }) => {
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
  },
}
