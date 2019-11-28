import { gql } from '@hammerframework/api'

export const schema = gql`
  type Invoice {
    id: ID!
    body: String!
    date: String!
    invoiceNumber: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    invoice(id: ID): Invoice
  }

  input InvoiceInput {
    id: ID
    date: String!
    invoiceNumber: String!
    body: String!
  }
  type Mutation {
    setInvoice(input: InvoiceInput!): Invoice
  }
`

export const resolvers = {
  Query: {
    invoice: async (_root, { id }, { currentUser, photon }) => {
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
